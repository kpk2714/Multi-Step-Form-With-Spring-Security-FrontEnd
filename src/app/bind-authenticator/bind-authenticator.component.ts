import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalErrorHandlerService } from '../utility/global-error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bind-authenticator',
  templateUrl: './bind-authenticator.component.html',
  styleUrls: ['./bind-authenticator.component.css']
})
export class BindAuthenticatorComponent implements OnInit {

  constructor(private toastr : ToastrService, private http : HttpClient, private errorHandler : GlobalErrorHandlerService,
              private router : Router
  ) {}

  secretKey : string = '';
  imageSrc : any;
  userEmail : string = '';
  redirectUrl : string = '';
  showLoader : boolean = false;

  ngOnInit() {

    const state = history.state as {
      email : string;
      redirectUrl : string;
    };

    this.userEmail = state.email;
    this.redirectUrl = state.redirectUrl;

    this.getSecretKey();
    this.getQRCode();

  }

  copyToClipboard(copiedText : any) {

    if (copiedText) {
        navigator.clipboard.writeText(copiedText).then(() => {
            this.toastr.info('Copied to clipboard!', '' , {timeOut : 1000, positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        }).catch(err => {
            this.toastr.info('Failed to copy!', '' , {timeOut : 1000, positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        });
    }
  }

  getSecretKey() {

    this.showLoader = true;
    let responseSecretKey = '';

    const params = new HttpParams().set('email', this.userEmail);
    this.http.get('http://localhost:2020/generate-secret', {params}).subscribe({
        next : (response : any) => {
            responseSecretKey = response.secretKey;
        },
        error : (error) => {
            this.showLoader = false;
            this.errorHandler.handleError(error);
        },
        complete : () => {
            setTimeout(() => {
              this.showLoader = false;
              this.secretKey = responseSecretKey;
            }, 2000);
        }
    });
  }

  getQRCode() {

    this.showLoader = true;
    let responseQR : any;

    const params = new HttpParams().set('email', this.userEmail);
    this.http.get('http://localhost:2020/generate-qrcode', {params, responseType : 'blob'}).subscribe({
        next : (response : any) => {
            responseQR = response;
            console.log(responseQR)
        },
        error : (error) => {
            this.showLoader = false;
            console.log(error)
            this.errorHandler.handleError(error);
        },
        complete : () => {
            setTimeout(() => {
              this.showLoader = false;

              const reader = new FileReader();
              reader.readAsDataURL(responseQR);
              reader.onloadend = () => {
                  this.imageSrc = reader.result as string;
              };
            }, 2000);
        }
    });
  }

  navigateToVerifyAuthOTP() {

    this.showLoader = true;

    setTimeout(() => {

      this.showLoader = false;
      
      this.router.navigate(['authenticator/verify'], {
        state : {
          email : this.userEmail,
          redirectUrl : this.redirectUrl
        }
      });
    }, 2000);
  }
}
