import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/multi-step-registration/candidate-register-form/technical-skills/skill';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class TechnicalService {

  constructor(private http : HttpClient, private utils : SecureStorageUtilService, private errorHandler : GlobalErrorHandlerService) {}
  
    technicalData! : Skill[];
  
    getAllTechnicalData() : Observable<any>{
          
      this.http.get('http://localhost:2020/getTechnical/userId='+this.utils.getItem('username'),{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.technicalData = response.technical;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  
      return new Observable<any>((subscriber)=>{
        setTimeout(()=>{
            subscriber.next(this.technicalData);
          },500);
      });
    }
}
