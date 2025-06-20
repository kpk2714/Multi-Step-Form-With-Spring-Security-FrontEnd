import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/multi-step-registration/candidate-register-form/languages-known/language';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

    constructor(private http : HttpClient, private utils : SecureStorageUtilService, private errorHandler : GlobalErrorHandlerService) {}
    
    languageData! : Language[];
    
    getAllLanguageData() : Observable<any>{
            
      this.http.get('http://localhost:2020/getLanguage/userId='+this.utils.getItem('username'),{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.languageData = response.language;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
    
      return new Observable<any>((subscriber)=>{
        setTimeout(()=>{
            subscriber.next(this.languageData);
          },500);
        });
    }
}
