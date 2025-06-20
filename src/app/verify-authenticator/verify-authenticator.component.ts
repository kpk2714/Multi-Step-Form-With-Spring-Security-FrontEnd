import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from '../utility/global-error-handler.service';
import { ToastrService } from 'ngx-toastr';
import { SecureStorageUtilService } from '../utility/secure-storage-util.service';

@Component({
  selector: 'app-verify-authenticator',
  templateUrl: './verify-authenticator.component.html',
  styleUrls: ['./verify-authenticator.component.css']
})
export class VerifyAuthenticatorComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private errorHandler : GlobalErrorHandlerService,
              private toastr : ToastrService, private utils : SecureStorageUtilService
  ){}

  focused : boolean = false;
  authOtp : string = '';
  userEmail : string = '';
  redirectUrl : string = '';
  showLoader : boolean = false;

  ngOnInit(): void {
    const state = history.state as {
      email : string;
      redirectUrl : string;
    };

    this.userEmail = state.email;
    this.redirectUrl = state.redirectUrl;
  }

  verifyAuthOTP() {

      let responseData : any;
      this.showLoader = true;

      console.log(this.userEmail);
      console.log(this.authOtp);

      const params = new HttpParams().set('email', this.userEmail).set('otp', this.authOtp);
      this.http.get('http://localhost:2020/verify-secret', {params}).subscribe({
          next : (response : any) => {
              responseData = response.isAuthenticated;
              console.log(response);
          }, 

          error : (error) => {
              this.showLoader = false;
              this.errorHandler.handleError(error);
              console.log(error);
          },

          complete : () => {
              setTimeout(() => {
                this.showLoader = false;

                if(responseData == false) {

                  console.log('Redirect Url - ' + this.redirectUrl);
                  console.log('Email - ' + this.userEmail);

                  this.updateAuthBind();

                  this.setLoggedInUser();

                  this.toastr.success('Authenticator Bind Successfully !', 'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

                  this.router.navigate([this.redirectUrl]);
                }
              }, 2000);
          }
      });
  }

  updateAuthBind() {
    const params = new HttpParams().set('email', this.userEmail);
    this.http.get('http://localhost:2020/update-authenticator-bind', {params}).subscribe({
      next : (response : any) => {
        console.log('Updated Auth - ' + response);
      },

      error : (error) => {
        this.errorHandler.handleError(error);
      }
    });
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
