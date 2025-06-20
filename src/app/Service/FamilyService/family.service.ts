import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from 'src/app/multi-step-registration/candidate-register-form/family-details/child';
import { Father } from 'src/app/multi-step-registration/candidate-register-form/family-details/father';
import { Mother } from 'src/app/multi-step-registration/candidate-register-form/family-details/mother';
import { WifeHus } from 'src/app/multi-step-registration/candidate-register-form/family-details/wife-hus';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  constructor(private http : HttpClient, private utils : SecureStorageUtilService, private errorHandler : GlobalErrorHandlerService) {}

  fatherData : any = new Father();
  motherData : any = new Mother();
  wifeHusData : any = new WifeHus();
  childData : any = new Child();

  getAllFamilyData() : Observable<any>{
      
    this.http.get('http://localhost:2020/getFather/userId='+this.utils.getItem('username') , {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.fatherData = response.father;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  
    this.http.get('http://localhost:2020/getMother/userId='+this.utils.getItem('username'), {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.motherData = response.mother;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  
    this.http.get('http://localhost:2020/getWifeHus/userId='+this.utils.getItem('username') , {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.wifeHusData = response.wifeHus;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  
    this.http.get('http://localhost:2020/getChild/userId='+this.utils.getItem('username') , {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.childData = response.child;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
      
    return new Observable<any>((subscriber)=>{
      setTimeout(()=>{
            subscriber.next([this.fatherData, this.motherData, this.wifeHusData, this.childData]);
        },500);
      });
    }
}
