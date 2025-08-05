import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.css']
})
export class ContinueComponent implements OnInit {

  constructor(private http : HttpClient, private errorHandler : GlobalErrorHandlerService, private utils : SecureStorageUtilService,
              private router : Router
  ) {}

  ngOnInit() {
    if(this.utils.getSessionItem(this.utils.encodeByBase64('isGoogleClicked')) != null) {
        this.utils.removeSessionItem(this.utils.encodeByBase64('isGoogleClicked'));
    }
  }

  showLoader : boolean = false;

  verifyContinueWithGoogle() {

    this.showLoader = true;
    let responseData : any;
  
    const params = new HttpParams().set('remember-me', true);
    this.http.get('http://localhost:2020/continueWithGoogleLogin', {params, withCredentials : true}).subscribe({
        next : (response : any) => {
            responseData = response;
        },
  
        error : (error : any) => {
            this.showLoader = false;
            this.errorHandler.handleError(error);
        },

        complete : () => {
            setTimeout(() => {

              this.showLoader = false;

              if(responseData.isAuthenticated == true) {
                this.setLoggedInUser(responseData.redirectUrl);
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

        error : (error : any) => {
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
}
