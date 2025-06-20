import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SecureStorageUtilService } from '../utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http : HttpClient , private authService : AuthService, private utils : SecureStorageUtilService) { }

  upload(url : string , file : File , name : string , status : string) : Observable<any> {

      const username : any = this.utils.getItem('username');
      const formData : FormData = new FormData();
      formData.append('file',file);
      formData.append('status',status);
      formData.append('userId',username);
      formData.append('documentName',name);

      return this.http.post(url,formData,{withCredentials : true});
  }

  getPdf(url : string , documentName : String) { // Observable<Blob>

    const username : any = this.utils.getItem('username');
    const params = new HttpParams().set('userId', username).set('documentName',documentName.toString());

    return this.http.get(url,{responseType : 'blob', params : params, withCredentials : true});

    // responseType : 'blob',

  }
}
