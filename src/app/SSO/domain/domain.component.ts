import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

    constructor(private http : HttpClient, private errorHandler : GlobalErrorHandlerService, 
                private router : Router, private utils : SecureStorageUtilService) { }
    ngOnInit() {

      if(this.utils.getSessionItem(this.utils.encodeByBase64('isSSOClicked')) != null) {
        this.utils.removeSessionItem(this.utils.encodeByBase64('isSSOClicked'));
      }

    }

    focused : boolean = false;
    domainData : string = '';
    showLoader : boolean = false;

    verifyCompanyDomain() {

      this.showLoader = true;
      let responseData : boolean;

      const params = new HttpParams().set('domain',this.domainData);
      this.http.get('http://localhost:2020/verifyDomain', {params, withCredentials : true}).subscribe({
        next : (response : any)=>{
          responseData = response.domain;
        },
        error : (error)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout(() => {

            this.showLoader = false;

            if(responseData == true) {

              const encodedKey = this.utils.encodeByBase64('isDomainClicked');
              const encodedValue = this.utils.encodeByBase64('true');
              this.utils.setSessionItem(encodedKey, encodedValue);

              this.router.navigate(['sso/email/verify']);
            }
          }, 2000);
        }
      });
    }
}
