import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diploma } from 'src/app/multi-step-registration/candidate-register-form/education-details/diploma';
import { Graduation } from 'src/app/multi-step-registration/candidate-register-form/education-details/graduation';
import { HigherSecondry } from 'src/app/multi-step-registration/candidate-register-form/education-details/higher-secondry';
import { Secondary } from 'src/app/multi-step-registration/candidate-register-form/education-details/secondary';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class EducationalService {

  constructor(private http : HttpClient, private utils : SecureStorageUtilService, private handleError : GlobalErrorHandlerService) { }

    secondaryData  : any = new Secondary();
    hsData : any= new HigherSecondry();
    diplomaData : any = new Diploma();
    graduationData : any = new Graduation();

    getAllEducationData() : Observable<any>{
    
      this.http.get('http://localhost:2020/get/secondary/userId='+this.utils.getItem('username'),{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.secondaryData = response.secondary;
        },
        error : (error)=>{
          this.handleError.handleError(error);
        }
      });

      this.http.get('http://localhost:2020/get/highersecondary/userId='+this.utils.getItem('username'),{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.hsData = response.hs;
        },
        error : (error)=>{
          this.handleError.handleError(error);
        }
      });

      this.http.get('http://localhost:2020/get/diploma/userId='+this.utils.getItem('username'),{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.diplomaData = response.diploma;
        },
        error : (error)=>{
          this.handleError.handleError(error);
        }
      });

      this.http.get('http://localhost:2020/get/graduation/userId='+this.utils.getItem('username'),{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.graduationData = response.graduation;
        },
        error : (error)=>{
          console.log(error);
        }
      });
    
      return new Observable<any>((subscriber)=>{
          setTimeout(()=>{
              subscriber.next([this.secondaryData, this.hsData, this.diplomaData, this.graduationData]);
          },500);
      });
    }
}
