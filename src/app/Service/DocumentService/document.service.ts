import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http : HttpClient, private utils : SecureStorageUtilService, private errorHandler : GlobalErrorHandlerService) {}
      
      proofOfAgePdf : any;
      
      getAllDocument() : Observable<any>{

        const username : any= this.utils.getItem('username');
        const ageParameter = new HttpParams().set('documentName' , 'ProofOfAge').set('userId',username);
        
        this.http.get('http://localhost:2020/getPdfByDocumentName',{params : ageParameter , withCredentials : true}).subscribe({
          next : (response : any)=>{
            this.proofOfAgePdf = response.pdf;
          },
          error : (error)=>{
            this.errorHandler.handleError(error);
          }
        });
      
        return new Observable<any>((subscriber)=>{
          setTimeout(()=>{
              subscriber.next(this.proofOfAgePdf);
            },500);
          });
      }
}
