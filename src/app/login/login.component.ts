import { Component, ErrorHandler, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../Service/auth.service';
import { SecureStorageUtilService } from '../utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from '../utility/global-error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private http : HttpClient , private service : AuthService , 
              private activateRoute : ActivatedRoute, 
              private utils : SecureStorageUtilService, private errorHandler : GlobalErrorHandlerService){}
  
  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe((queries)=>{
      const logout = Boolean(queries.get('logout'));
 
      if(logout){
        // verify logout in login page
      }
    });

    this.checkLogin();

    if(this.utils.getSessionItem(this.utils.encodeByBase64('isSSOClicked')) != null) {
      this.utils.removeSessionItem(this.utils.encodeByBase64('isSSOClicked'));
    }
  }

  user : User = new User();
  errorData : string = "";
  showLoader : boolean = false;
  
  loginUser() {

    this.showLoader = true;

    const params = new HttpParams().set('username', this.user.username.toString())
                                   .set('password', this.user.password.toString())
                                   .set('remember-me', this.user.rememberMe.toString());
    
    let responseData : any;
    let responseUrl = '';
    return this.http.post('http://localhost:2020/login',this.user, {params, withCredentials: true}).subscribe({
      next : (response : any)=>{
        responseData = response;
        responseUrl = response.redirectUrl;
      },

      error : (error)=>{
        this.showLoader = false;

        if(error.error.message == 'Invalid username or password !'){
            this.errorData = "Wrong Credentails !!!";
        }

        this.errorHandler.handleError(error);
      },

      complete : () => {
        setTimeout(() => {

          this.showLoader = false;

          if(responseData.role == 'ROLE_STUDENT') {
            this.isAuthenticatorBind(responseData.email, responseUrl);
          }

        }, 2000);
      }
    });
  }

  setLoggedInUser(redirectedUrl : any) {
    this.http.get('http://localhost:2020/user', { withCredentials: true } ).subscribe({
      next : (response : any) => {

        if(response.authenticated == true) {

          this.setWithExpiry('username',response.user.username,7);

          this.utils.setItem('isAuthenticated', response.authenticated.toString(), 7);
          this.utils.setItem('username', response.user.username, 7);

          this.router.navigate([redirectedUrl]);
        }
      },
      error : (error) => {
        this.errorHandler.handleError(error);
      }
    })
  }

  isAuthenticatorBind(email : string, responseUrl : string) {

    const params = new HttpParams().set('email',email);
    this.http.get('http://localhost:2020/verify-authenticator-bind', {params}).subscribe({
      next : (response : any) => {
        if(response.isAuthBind == false || response.isAuthBind == null) {
          this.router.navigate(['authenticator/bind'], 
              {state : { email : email, redirectUrl : responseUrl}
          });
        }

        if(response.isAuthBind == true) {
          this.setLoggedInUser(responseUrl);
        }
      }, 

      error : (error) => {
        this.errorHandler.handleError(error);
      }
    });
  }

  checkLogin() {
    this.http.get('http://localhost:2020/user', { withCredentials : true }).subscribe({
      next : () => {
        this.router.navigate(['/student/pages/home']);
      },
      error : (error) => {
        this.errorHandler.handleError(error);
      }
    })
  }

  setWithExpiry(key: string, value: any, ttlInDays: number) {
    const now = new Date();

    const item = {
      value: value,
      expiry: now.getTime() + ttlInDays * 24 * 60 * 60 * 1000, // 7 days = 7*24*60*60*1000
    };

    localStorage.setItem(key, JSON.stringify(item));
  }

  navigateToSSO() {

    const encodedKey = this.utils.encodeByBase64('isSSOClicked');
    const encodedValue = this.utils.encodeByBase64('true');
    this.utils.setSessionItem(encodedKey, encodedValue);
    
    this.router.navigate(['/sso/domain']);
  }

  signInWithGoogle() {

    const encodedKey = this.utils.encodeByBase64('isGoogleClicked');
    const encodedValue = this.utils.encodeByBase64('true');
    this.utils.setSessionItem(encodedKey, encodedValue);

    window.location.href = 'http://localhost:2020/oauth2/authorization/google';
  }
}
