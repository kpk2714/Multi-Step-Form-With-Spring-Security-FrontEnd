import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SecureStorageUtilService } from '../utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http : HttpClient,private utils : SecureStorageUtilService) { }


  uploadImage(file : File) : Observable<any>{

    const formData = new FormData();
    formData.append('file',file);
    return this.http.post('http://localhost:2020/upload/userId='+ this.utils.getItem('username'),formData,{withCredentials : true});
  }

  getImage(id : String) : Observable<Blob>{
    return this.http.get('http://localhost:2020/get/image/userId='+id,{responseType : 'blob', withCredentials : true});
  }
}
