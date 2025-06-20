import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {

  constructor(private http : HttpClient, private errorHandler : GlobalErrorHandlerService, private toastr : ToastrService,
              private router : Router, private utils : SecureStorageUtilService
  ) {}

  ngOnInit() {

    if(this.utils.getSessionItem(this.utils.encodeByBase64('isDomainClicked')) != null) {
      this.utils.removeSessionItem(this.utils.encodeByBase64('isDomainClicked'));
    }

  }

    emailFocused : boolean = false;
    otpFocused : boolean = false;

    emailData : string = '';
    otpData : string = '';
    showContinueBtn : boolean = false;
    showSendOtpBtn : boolean = true;

    showLoader : boolean = false;

    sendOtp() {
      this.showContinueBtn = true;
      this.showSendOtpBtn = false;

      let responseData = '';
      this.showLoader = true;

      const params = new HttpParams().set('email', this.emailData);

      return this.http.get('http://localhost:2020/getOtp', {params, withCredentials: true}).subscribe({
        next : (response : any)=>{
          responseData = response.otp;
        },
        error : (error)=>{
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            // Handle Response
            this.toastr.success(responseData, 'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          }, 2000);
        }
      });
    }

    verifyOtp() {
      let responseData = '';
      this.showLoader = true;

      const params = new HttpParams().set('email', this.emailData).set('otp', this.otpData);

      return this.http.get('http://localhost:2020/verifyOtp', {params, withCredentials: true}).subscribe({
        next : (response : any)=>{
          responseData = response.verified;
        },
        error : (error)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {

            const encodedKey = this.utils.encodeByBase64('isEmailClicked');
            const encodedValue = this.utils.encodeByBase64('true');
            this.utils.setSessionItem(encodedKey, encodedValue);

            this.showLoader = false;
  
            // Handle Response
            this.toastr.success(responseData, 'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

            // Redirect to Authenticator Verification
            this.router.navigate(['sso/authenticator/verify']);
          }, 2000);
        }
      });
    }
}
