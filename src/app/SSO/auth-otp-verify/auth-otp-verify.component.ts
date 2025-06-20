import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Component({
  selector: 'app-auth-otp-verify',
  templateUrl: './auth-otp-verify.component.html',
  styleUrls: ['./auth-otp-verify.component.css']
})
export class AuthOtpVerifyComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private toastr : ToastrService, 
              private errorHandler : GlobalErrorHandlerService, private utils : SecureStorageUtilService){}

  focused : boolean = false;
  authOtp : string = '';
  userEmail : any;
  showLoader : boolean = false;

  ngOnInit(){
    const state = history.state as {
      email : string;
    };

    this.userEmail = state.email;

    if(this.utils.getSessionItem(this.utils.encodeByBase64('isAuthClicked')) != null) {
        this.utils.removeSessionItem(this.utils.encodeByBase64('isAuthClicked'));
    }
  }

  verifyAuthOTP() {

    this.showLoader = true;
    let responseData : any;

    const params = new HttpParams().set('email', this.userEmail).set('otp', this.authOtp);
    this.http.get('http://localhost:2020/verify-secret', {params}).subscribe({
      next : (response : any) => {
        responseData = response.isAuthenticated;
        console.log(response)
      },

      error : (error) => {
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },

      complete : () => {
        setTimeout(() => {
          this.showLoader = false;

          if(responseData == true) {

            this.ssoLogin();
            
            this.toastr.success('Authenticator Verified Successfully !', 'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          }
        }, 2000);
      }
    });
  }

  ssoLogin() {

    let redirectUrl : any;
    let isAuthenticated : any;

    this.showLoader = true;

    const params = new HttpParams().set('email', this.userEmail).set('remember-me', true);
    this.http.post('http://localhost:2020/ssologin', null,{params, withCredentials: true}).subscribe({
      next : (response : any) => {
        redirectUrl = response.redirectUrl;
        isAuthenticated = response.isAuthenticated;
      },

      error : (error) => {
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },

      complete : () => {
        setTimeout(() => {
          this.showLoader = false;

          if(isAuthenticated == true) {

            this.setLoggedInUser();

            this.router.navigate([redirectUrl]);
          }
        }, 2000);
      }
    })
  }

  setLoggedInUser() {
    this.http.get('http://localhost:2020/user', { withCredentials: true } ).subscribe({
      next : (response : any) => {

        if(response.authenticated == true) {

          this.setWithExpiry('username',response.user.username,7);

          this.utils.setItem('isAuthenticated', response.authenticated.toString(), 7);
          this.utils.setItem('username', response.user.username, 7);
        }
      },
      error : (error) => {
        this.errorHandler.handleError(error);
      }
    });
  }

  setWithExpiry(key: string, value: any, ttlInDays: number) {
    const now = new Date();

    const item = {
      value: value,
      expiry: now.getTime() + ttlInDays * 24 * 60 * 60 * 1000, // 7 days = 7*24*60*60*1000
    };

    localStorage.setItem(key, JSON.stringify(item));
  }
}
