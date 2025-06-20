import { Component } from '@angular/core';
import { ServiceService } from '../sharedService/service.service';
import { Language } from './language';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Width } from 'src/app/Model/width';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';

@Component({
  selector: 'app-languages-known',
  templateUrl: './languages-known.component.html',
  styleUrls: ['./languages-known.component.css']
})
export class LanguagesKnownComponent {

  constructor(private Sservice : ServiceService , private http : HttpClient , private authService : AuthService , 
    private router : Router , private toastr : ToastrService, private utils : SecureStorageUtilService,
    private errorHandler : GlobalErrorHandlerService, private activatedRoute : ActivatedRoute
  ){}

  languageData!: any[];
  username : any;
  allWidth : any = [];
  widthSum : any = 0;
  showLoader : boolean = false;

  ngOnInit(){

    this.username = this.utils.getItem('username');

    this.getAllWidth();

    this.languageData = this.activatedRoute.snapshot.data['languageData'];
    
    //this.getLanguageData();
    this.verifyLanguageDelete();
  }

  verifyLanguageDelete(){
    this.getLanguageWidth().subscribe({
      next : (response : any)=>{
        if(response.width !=0 && this.languageData?.length==0){
          this.http.delete('http://localhost:2020/deleteWidth/userId='+this.username+'/form=Language',{withCredentials : true}).subscribe({
            next : ()=>{
              //this.getAllWidth();
            },
            error : (error)=>{
              this.errorHandler.handleError(error);
            }
          });
        }
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getLanguageWidth() : Observable<any>{
    return this.http.get('http://localhost:2020/getWidth/userId='+this.username+'/form='+'Language', {withCredentials : true});
  }


  getAllWidth(){
    this.http.get('http://localhost:2020/getAllWidth/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
          this.allWidth = response.width;
          for(let width of this.allWidth) {
            this.widthSum = this.widthSum + width;
          }
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getLanguageData(){
    this.http.get('http://localhost:2020/getLanguage/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.languageData = response.language;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  showSaveCancelButton : String = "hidden";

  showLanguage : String = "hidden";

  showAllLanguages : String = "inline-block";
  showButton : String = "inline-block";
  showEditDetails : String = "hidden";

  AddLanguage() : void{
    this.showAllLanguages = "hidden";
    this.showButton = "hidden";
    this.showEditDetails = "inline-block";
    this.showLanguage = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  language = new Language();

  successMessage : String = "";
  errorMessage : String = "";

  newWidth : any = new Width();

  storeLanguageForm(languageform : NgForm) : void {

      this.showLoader = true;
      this.language.userId = this.username;
      this.language.languageId = this.language.languageCode?.substring(0,1)+''+
                      this.language.languageCode?.substring(this.language.languageCode.length-1,this.language.languageCode.length) + '' + 
                      this.language.languageType?.substring(0,1)+'101';

      this.http.post('http://localhost:2020/saveLanguage',this.language,{withCredentials : true}).subscribe({
        next : ()=>{
          this.getLanguageData();
        },
        error : (error)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            // Handle Response
            this.toastr.success('Technical Skills are saved !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
  
            languageform.reset();
          }, 2000);
        }
      });

      
      if(this.languageData.length==0){

          this.newWidth.userId = this.username;
          this.newWidth.width = 14;
          this.newWidth.formname = 'Language';

          this.http.post('http://localhost:2020/saveWidth',this.newWidth,{withCredentials : true}).subscribe({
              next : ()=>{
              },
              error : (error)=>{
                this.errorHandler.handleError(error);
              }
          });
      }
  }

  nameexpression = "^[a-zA-Z .]+$";

  resetLanguageForm(languageform : NgForm) : void {
    languageform.reset();
  }

  deleteLanguage(id : String){

      this.showLoader = true;
      let responseData = '';
      const params = new HttpParams().set('userId',this.username);

      this.http.delete('http://localhost:2020/deleteLanguage/languageId='+id,{params,withCredentials : true}).subscribe({
        next : (response : any)=>{
            responseData = response.language;
        },
        error : (error)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            this.getLanguageData();
            
            // Handle Response
            this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          }, 2000);
        }
      });
  }

  showLanguageModal: boolean = false;

  openLanguageModal(): void {
    this.showLanguageModal = true;
  }

  onConfirmLanguage(result: boolean, companyId: any): void {
    this.showLanguageModal = false;
    if (result) {
      this.deleteLanguage(companyId);
    }
  }
}
