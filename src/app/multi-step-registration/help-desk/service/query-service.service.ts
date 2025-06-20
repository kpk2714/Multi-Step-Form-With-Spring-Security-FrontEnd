import { Injectable, OnInit } from '@angular/core';
import { QueryData } from '../class/query-data';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReplyData } from '../class/reply-data';
import { AuthService } from 'src/app/Service/auth.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class QueryServiceService {

  constructor(private http : HttpClient , private authService : AuthService, private utils : SecureStorageUtilService) { }

  public registerQueryData(queryData : QueryData) : Observable<any>{

    return  this.http.post("http://localhost:2020/registerquery",queryData,{withCredentials : true});
  }

  public getAllQueryData(id : String) : Observable<any> {
    return this.http.get("http://localhost:2020/getAllQuery/userId="+id,{withCredentials : true});
  }


  scheduleTaskAtSpecificTime(hour: number, minute: number) {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(hour, minute, 0, 0);

    if (targetTime < now) {
      targetTime.setDate(targetTime.getDate() + 1); // Schedule for the next day if the time has passed
    }

    const delay = targetTime.getTime() - now.getTime();
    
    setTimeout(() => {
      this.triggerMethod();
    }, delay);
  }

  triggerMethod() {
    console.log('Method triggered at the scheduled time');

    const username : any = this.utils.getItem('username');

    this.getAllQueryData(username);
  }

}
