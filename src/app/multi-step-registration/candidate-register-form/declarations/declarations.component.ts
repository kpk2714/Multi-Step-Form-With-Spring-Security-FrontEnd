import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../sharedService/service.service';
import { NgForm } from '@angular/forms';
import { Declarations } from './declarations';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Width } from 'src/app/Model/width';
import { Secondary } from '../education-details/secondary';
import { Father } from '../family-details/father';
import { Personal } from '../personal-details/personal';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';

@Component({
  selector: 'app-declarations',
  templateUrl: './declarations.component.html',
  styleUrls: ['./declarations.component.css']
})
export class DeclarationsComponent {

  constructor(private Sservice : ServiceService , private http : HttpClient , private authService : AuthService , 
    private router : Router , private toastr : ToastrService, private utils : SecureStorageUtilService,
    private errorHandler : GlobalErrorHandlerService
  ){}

  @ViewChild('dec1') dec1! : ElementRef;
  @ViewChild('dec2') dec2! : ElementRef;

  personal : any= new Personal();
  educationData  : any = new Secondary();
  familyData : any = new Father();
  companyData : any[] = [];
  technicalData : any[] = [];
  languageData : any[] = [];

  declarationData : any = new Declarations();

  isComplete : boolean = false;

  username : any;
  allWidth : any = [];
  widthSum : any = 0;
  showLoader : boolean = false;

  ngOnInit(){

    this.username = this.utils.getItem('username');

    this.getDeclaration();
    this.getAllWidth();
    this.getPersonal();
    this.getSecondary();
    this.getFamily();
    this.getCompanyData();
    this.getTechnicalData();
    this.getLanguageData();
  }

  getDeclaration() {
    this.http.get('http://localhost:2020/getDeclaration/userId='+this.username,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          if(response.dec!=null) {
            this.dec1.nativeElement.checked = true;
            this.dec2.nativeElement.checked = true;
            this.isBtnClicked = true;
          }
        },
        error : (error)=>{
          this.errorHandler.handleError(error);
        }
    });
  }

  getAllWidth(){
    this.http.get('http://localhost:2020/getAllWidth/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
          this.allWidth = response.width;
          for(let width of this.allWidth) {
            this.widthSum = this.widthSum + width;
          }
          this.checkDocumentUpload(this.widthSum);
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  checkDocumentUpload(width : any){
    if(width>=84){
        this.isComplete = true;
    } 
  }

  getPersonal(){
    this.http.get('http://localhost:2020/getPersonal/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.personal = response.personal;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    })
  }

  getSecondary(){
    this.http.get('http://localhost:2020/get/secondary/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.educationData = response.secondary;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getFamily(){
    this.http.get('http://localhost:2020/getFather/userId='+this.username , {withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.familyData = response.father;
        },
        error : (error)=>{
          this.errorHandler.handleError(error);
        }
    });
  }

  getCompanyData(){
    this.http.get('http://localhost:2020/getCompany/userId='+this.username , {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.companyData = response.company;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getTechnicalData(){
    this.http.get('http://localhost:2020/getTechnical/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.technicalData = response.technical;
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

  getDeclarationData(){
    this.http.get('http://localhost:2020/getDeclaration/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.declarationData = response.dec;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  declare = new Declarations();

  isBtnClicked : boolean = false;

  storeDeclarationForm(declarationForm : NgForm) : void {

    this.showLoader = true;
    this.declare.userId = this.username;

    this.http.post('http://localhost:2020/saveDeclaration',this.declare,{withCredentials : true}).subscribe({
        next : ()=>{
          
        },
        error : (error)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;

            // Handle Response
            this.toastr.success('Form Submitted Successfully !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

            this.isBtnClicked = true;
          }, 2000);
        }
    });
  }
}
