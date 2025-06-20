import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Component({
  selector: 'app-authenticator-verify',
  templateUrl: './authenticator-verify.component.html',
  styleUrls: ['./authenticator-verify.component.css']
})
export class AuthenticatorVerifyComponent implements OnInit {

    studentIdFocused : boolean = false;
    studentIdData : string = '';

    emailFocused : boolean = false;
    emailData : string = '';

    showLoader : boolean = false;

    constructor(private http : HttpClient, private router : Router, private errorHandler : GlobalErrorHandlerService,
                private utils : SecureStorageUtilService
    ) {}

    ngOnInit() {
      
      if(this.utils.getSessionItem(this.utils.encodeByBase64('isEmailClicked')) != null) {
        this.utils.removeSessionItem(this.utils.encodeByBase64('isEmailClicked'));
      }
    }

    verifyDetails() {

      this.showLoader = true;
      let responseData : any;

      const params = new HttpParams().set('studentId', this.studentIdData).set('email', this.emailData);

      this.http.get('http://localhost:2020/verifyStudent', {params}).subscribe({
        next : (response : any) => {
          responseData = response.auth;
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

              const encodedKey = this.utils.encodeByBase64('isAuthClicked');
              const encodedValue = this.utils.encodeByBase64('true');
              this.utils.setSessionItem(encodedKey, encodedValue);

              this.router.navigate(['sso/authenticator/otp-verify'], {
                state : {
                  email : this.emailData
                }
              });
            }
            
          }, 2000);
        }
      })
    }
}
