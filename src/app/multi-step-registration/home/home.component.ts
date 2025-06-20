import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Personal } from '../candidate-register-form/personal-details/personal';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Width } from 'src/app/Model/width';
import { Secondary } from '../candidate-register-form/education-details/secondary';
import { Father } from '../candidate-register-form/family-details/father';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  time : any = new Date().getHours();

  personal : any= new Personal();
  educationData  : any = new Secondary();
  familyData : any = new Father();
  companyData !: any[];
  technicalData !: any[];
  languageData !: any[];

  isComplete : boolean = false;

  constructor(private http : HttpClient , private authService : AuthService , private toastr : ToastrService , 
              private router : Router, private errorHandler : GlobalErrorHandlerService){}

  utils : SecureStorageUtilService = inject(SecureStorageUtilService);
  allWidth : any = [];
  widthSum : any = 0;
  username : any;
  
  ngOnInit(): void {

      this.username = this.utils.getItem('username');

      ///this.setLoggedInUser();

      this.getPersonalDetails();
      this.getAllWidth();
      
      this.getSecondary();
      this.getFamily();
      this.getCompanyData();
      this.getTechnicalData();
      this.getLanguageData();
  }

  setLoggedInUser() {
    this.http.get('http://localhost:2020/user', { withCredentials: true } ).subscribe({
      next : (response : any) => {

        if(response.authenticated == true) {
          console.log(response)

          // if(response.authenticated == true) {

          // sessionStorage.setItem('username', response.user.username);
          

          // this.utils.setItem('isAuthenticated', response.authenticated.toString());
          // this.utils.setItem('username', response.user.username);

          // //this.router.navigate([redirectedUrl]);
          // }
        }
      },
      error : (error) => {
        this.errorHandler.handleError(error);
      }
    })
  }

  getPersonalDetails(){
    this.http.get('http://localhost:2020/getPersonal/userId='+ this.username,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.personal = response.personal;
        },
        error : (error)=>{
          this.errorHandler.handleError(error);
        }
    });
  }

  getAllWidth() {
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

  getSecondary(){
    this.http.get('http://localhost:2020/get/secondary/userId='+this.username, {withCredentials : true}).subscribe({
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

  pendingForm : String = "hidden";

  pendingFormDesign : String = "false";

  activeFormDesign : String = "false";


  pendingFormStatus(){
    this.pendingForm = "inline-block";
    this.activeForm = "hidden";

    this.pendingFormDesign = "true";
    this.activeFormDesign = "false";
  }

  activeForm : String = "hidden";

  activeFormStatus(){
    this.activeForm = "inline-block";
    this.pendingForm = "hidden";

    this.activeFormDesign = "true";
    this.pendingFormDesign = "false";
  }

  optionalSpace : String = "inline-block";
}
