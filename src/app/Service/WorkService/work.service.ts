import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from 'src/app/multi-step-registration/candidate-register-form/work-experience/work';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http : HttpClient, private utils : SecureStorageUtilService, private errorHandler : GlobalErrorHandlerService) {}

  companyData! : Work[];

  getAllCompanyData() : Observable<any>{
        
    this.http.get('http://localhost:2020/getCompany/userId='+this.utils.getItem('username') , {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.companyData = response.company;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });

    return new Observable<any>((subscriber)=>{
      setTimeout(()=>{
          subscriber.next(this.companyData);
        },500);
    });
  }
}
