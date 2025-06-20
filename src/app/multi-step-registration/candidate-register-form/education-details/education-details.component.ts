import { Component } from '@angular/core';
import { Personal } from '../personal-details/personal';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../sharedService/service.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Diploma } from './diploma';
import { HigherSecondry } from './higher-secondry';
import { Graduation } from './graduation';
import { Secondary } from './secondary';
import { Width } from 'src/app/Model/width';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent {

  constructor(private Sservice : ServiceService , private http : HttpClient , private authService : AuthService , 
      private toastr : ToastrService , private router : Router, private util : SecureStorageUtilService, 
      private errorHandler : GlobalErrorHandlerService, private activatedRoute : ActivatedRoute
  ){}

  width : any;

  secondaryData  : any = new Secondary();
  hsData : any= new HigherSecondry();
  diplomaData : any = new Diploma();
  graduationData : any = new Graduation();

  successMessage : String = "";
  errorMessage : String = "";

  username : any;
  allWidth : any = [];
  widthSum : any = 0;

  educationalData : any[] = [];
  showLoader : boolean = false;

  ngOnInit(){

    this.username = this.util.getItem('username');
    this.getAllWidth();

    this.educationalData = this.activatedRoute.snapshot.data['educationalData'];

    this.secondaryData = this.educationalData[0];
    this.hsData = this.educationalData[1];
    this.diplomaData = this.educationalData[2];
    this.graduationData = this.educationalData[3];

    this.getEducationWidth().subscribe({
      next : (response : any)=>{
        if(response.width!=0 && this.secondaryData==null && this.graduationData==null){
          this.http.delete('http://localhost:2020/deleteWidth/userId='+this.username+'/form=Education',{withCredentials : true}).subscribe({
            next : ()=>{

              //this.getAllWidth();

              if(this.hsData!=null) {
                this.deleteHigherSecondary();
              }

              if(this.diplomaData!=null) {
                this.deleteDiploma();
              }
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

  getEducationWidth() : Observable<any>{
    return this.http.get('http://localhost:2020/getWidth/userId='+this.username+'/form='+'Education', {withCredentials : true});
  }

  getAllWidth() {
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

  getSecondary(){
    this.http.get('http://localhost:2020/get/secondary/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.secondaryData = response.secondary;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getHigherSecondary(){
    this.http.get('http://localhost:2020/get/highersecondary/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.hsData = response.hs;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getDiploma(){
    this.http.get('http://localhost:2020/get/diploma/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.diplomaData = response.diploma;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getGraduation(){
    this.http.get('http://localhost:2020/get/graduation/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.graduationData = response.graduation;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  showEducation : String = "inline-block";
  showButton : String = "inline-block";
  showEditDetails : String = "hidden";

  AddEducation() : void{
      this.showEducation = "hidden";
      this.showButton = "hidden";
      this.showEditDetails = "inline";
  }

  personal = new Personal();

  diploma = new Diploma();

  hs = new HigherSecondry();

  graduation = new Graduation();

  secondary = new Secondary();

  showSecondary : String = "hidden";

  secondaryYes() : void{
    this.showSecondary = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  secondaryNo(educationform : NgForm) : void{
    this.showSecondary = "hidden";

    educationform.controls['secdegree'].setValue(' ');
    educationform.controls['secschool'].setValue(' ');
    educationform.controls['secduration'].setValue(' ');
    educationform.controls['secstartdate'].setValue(' ');
    educationform.controls['secenddate'].setValue(' ');
    educationform.controls['secboard'].setValue(' ');
    educationform.controls['secbranch'].setValue(' ');
    educationform.controls['sectotalscore'].setValue(' ');
    educationform.controls['sectotalmarks'].setValue(' ');
    educationform.controls['secpercentage'].setValue(' ');
    educationform.controls['secschoolstate'].setValue(' ');
    educationform.controls['secschoolcity'].setValue(' ');
    educationform.controls['secsubject1name'].setValue(' ');
    educationform.controls['secsubject3name'].setValue(' ');
    educationform.controls['secsubject1marks'].setValue(' ');
    educationform.controls['secsubject2name'].setValue(' ');
    educationform.controls['secsubject2marks'].setValue(' ');
    educationform.controls['secsubject3marks'].setValue(' ');
    educationform.controls['secsubject4name'].setValue(' ');
    educationform.controls['secsubject4marks'].setValue(' ');
    educationform.controls['secsubject5name'].setValue(' ');
    educationform.controls['secsubject7name'].setValue(' ');
    educationform.controls['secsubject5marks'].setValue(' ');
    educationform.controls['secsubject6name'].setValue(' ');
    educationform.controls['secsubject6marks'].setValue(' ');
    educationform.controls['secsubject7marks'].setValue(' ');
    educationform.controls['secsubject8name'].setValue(' ');
    educationform.controls['secsubject8marks'].setValue(' ');
  }

  showHigherSecondary : String = "hidden";

  highersecondaryYes() : void{
    this.showHigherSecondary = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  highersecondaryNo(educationform : NgForm) : void{
    this.showHigherSecondary = "hidden";

    educationform.controls['highsecdegree'].setValue(' ');
    educationform.controls['highsecduration'].setValue(' ');
    educationform.controls['highsecstartdate'].setValue(' ');
    educationform.controls['highsecenddate'].setValue(' ');
    educationform.controls['highsecschool'].setValue(' ');
    educationform.controls['highsecboard'].setValue(' ');
    educationform.controls['highsecbranch'].setValue(' ');
    educationform.controls['highsectotalscore'].setValue(' ');
    educationform.controls['highsectotalmarks'].setValue(' ');
    educationform.controls['highsecpercentage'].setValue(' ');
    educationform.controls['highsecschoolstate'].setValue(' ');
    educationform.controls['highsecschoolcity'].setValue(' ');
    educationform.controls['highsecsubject1name'].setValue(' ');
    educationform.controls['highsecsubject1marks'].setValue(' ');
    educationform.controls['highsecsubject2name'].setValue(' ');
    educationform.controls['highsecsubject2marks'].setValue(' ');
    educationform.controls['highsecsubject3name'].setValue(' ');
    educationform.controls['highsecsubject3marks'].setValue(' ');
    educationform.controls['highsecsubject4name'].setValue(' ');
    educationform.controls['highsecsubject4marks'].setValue(' ');
    educationform.controls['highsecsubject5name'].setValue(' ');
    educationform.controls['highsecsubject5marks'].setValue(' ');
    educationform.controls['highsecsubject6name'].setValue(' ');
    educationform.controls['highsecsubject6marks'].setValue(' ');
  }

  showDiploma : String = "hidden";

  DiplomaYes() : void{
    this.showDiploma = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  DiplomaNo(educationform : NgForm) : void{
    this.showDiploma = "hidden";

    educationform.controls['diplomadegree'].setValue(' ');
    educationform.controls['diplomaduration'].setValue(' ');
    educationform.controls['diplomastartdate'].setValue(' ');
    educationform.controls['diplomaenddate'].setValue(' ');
    educationform.controls['diplomaschool'].setValue(' ');
    educationform.controls['diplomaboard'].setValue(' ');
    educationform.controls['diplomabranch'].setValue(' ');
    educationform.controls['diplomacgpa'].setValue(' ');
    educationform.controls['diplomapercentage'].setValue(' ');
    educationform.controls['diplomaschoolstate'].setValue(' ');
    educationform.controls['diplomaschoolcity'].setValue(' ');
    educationform.controls['diplomasemester1sgpa'].setValue(' ');
    educationform.controls['diplomasemester1cgpa'].setValue(' ');
    educationform.controls['diplomasemester1backlog'].setValue(' ');
    educationform.controls['diplomasemester1percentage'].setValue(' ');
    educationform.controls['diplomasemester2sgpa'].setValue(' ');
    educationform.controls['diplomasemester2cgpa'].setValue(' ');
    educationform.controls['diplomasemester2backlog'].setValue(' ');
    educationform.controls['diplomasemester2percentage'].setValue(' ');
    educationform.controls['diplomasemester3sgpa'].setValue(' ');
    educationform.controls['diplomasemester3cgpa'].setValue(' ');
    educationform.controls['diplomasemester3backlog'].setValue(' ');
    educationform.controls['diplomasemester3percentage'].setValue(' ');
    educationform.controls['diplomasemester4sgpa'].setValue(' ');
    educationform.controls['diplomasemester4cgpa'].setValue(' ');
    educationform.controls['diplomasemester4backlog'].setValue(' ');
    educationform.controls['diplomasemester4percentage'].setValue(' ');
    educationform.controls['diplomasemester5sgpa'].setValue(' ');
    educationform.controls['diplomasemester5cgpa'].setValue(' ');
    educationform.controls['diplomasemester5backlog'].setValue(' ');
    educationform.controls['diplomasemester5percentage'].setValue(' ');
    educationform.controls['diplomasemester6sgpa'].setValue(' ');
    educationform.controls['diplomasemester6cgpa'].setValue(' ');
    educationform.controls['diplomasemester6backlog'].setValue(' ');
    educationform.controls['diplomasemester6percentage'].setValue(' ');
  }

  showGraduation : String = "hidden";

  GraduationYes() : void{
    this.showGraduation = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  GraduationNo(educationform : NgForm) : void {
    this.showGraduation = "hidden";

    educationform.controls['graduationdegree'].setValue(' ');
    educationform.controls['graduationduration'].setValue(' ');
    educationform.controls['graduationstartdate'].setValue(' ');
    educationform.controls['graduationenddate'].setValue(' ');
    educationform.controls['graduationschool'].setValue(' ');
    educationform.controls['graduationboard'].setValue(' ');
    educationform.controls['graduationbranch'].setValue(' ');
    educationform.controls['graduationcgpa'].setValue(' ');
    educationform.controls['graduationpercentage'].setValue(' ');
    educationform.controls['graduationschoolstate'].setValue(' ');
    educationform.controls['graduationschoolcity'].setValue(' ');
    educationform.controls['graduationsemester1sgpa'].setValue(' ');
    educationform.controls['graduationsemester1cgpa'].setValue(' ');
    educationform.controls['graduationsemester1backlog'].setValue(' ');
    educationform.controls['graduationsemester1percentage'].setValue(' ');
    educationform.controls['graduationsemester2sgpa'].setValue(' ');
    educationform.controls['graduationsemester2cgpa'].setValue(' ');
    educationform.controls['graduationsemester2backlog'].setValue(' ');
    educationform.controls['graduationsemester2percentage'].setValue(' ');
    educationform.controls['graduationsemester3sgpa'].setValue(' ');
    educationform.controls['graduationsemester3cgpa'].setValue(' ');
    educationform.controls['graduationsemester3backlog'].setValue(' ');
    educationform.controls['graduationsemester3percentage'].setValue(' ');
    educationform.controls['graduationsemester4sgpa'].setValue(' ');
    educationform.controls['graduationsemester4cgpa'].setValue(' ');
    educationform.controls['graduationsemester4backlog'].setValue(' ');
    educationform.controls['graduationsemester4percentage'].setValue(' ');
    educationform.controls['graduationsemester5sgpa'].setValue(' ');
    educationform.controls['graduationsemester5cgpa'].setValue(' ');
    educationform.controls['graduationsemester5backlog'].setValue(' ');
    educationform.controls['graduationsemester5percentage'].setValue(' ');
    educationform.controls['graduationsemester6sgpa'].setValue(' ');
    educationform.controls['graduationsemester6cgpa'].setValue(' ');
    educationform.controls['graduationsemester6backlog'].setValue(' ');
    educationform.controls['graduationsemester6percentage'].setValue(' ');
    educationform.controls['graduationsemester7sgpa'].setValue(' ');
    educationform.controls['graduationsemester7cgpa'].setValue(' ');
    educationform.controls['graduationsemester7backlog'].setValue(' ');
    educationform.controls['graduationsemester7percentage'].setValue(' ');
    educationform.controls['graduationsemester8sgpa'].setValue(' ');
    educationform.controls['graduationsemester8cgpa'].setValue(' ');
    educationform.controls['graduationsemester8backlog'].setValue(' ');
    educationform.controls['graduationsemester8percentage'].setValue(' ');
  }

  educationWidth = new Width();

  storeEducationForm( educationform : NgForm ) : void {
    
      this.showLoader = true;

      this.http.post('http://localhost:2020/save/secondary/userId='+this.username,this.secondary,{withCredentials : true}).subscribe({
          next : (response : any)=>{
            this.successMessage = response.secondary;
          },
          error : (error)=>{
            // Handle Error
            this.showLoader = false;
            this.errorHandler.handleError(error);
          }
      });

      this.http.post('http://localhost:2020/save/highsecondary/userId='+this.username,this.hs,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.successMessage = response.hs;
        },
        error : (error)=>{
          // Handle Error
          this.showLoader = false;
          this.errorHandler.handleError(error);
        }
      });

      this.http.post('http://localhost:2020/save/diploma/userId='+this.username,this.diploma,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.successMessage = response.diploma;
        },
        error : (error)=>{
          // Handle Error
          this.showLoader = false;
          this.errorHandler.handleError(error);
        }
      });

      this.http.post('http://localhost:2020/save/graduation/userId='+this.username,this.graduation,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.successMessage = response.graduation;
        },
        error : (error)=>{
          // Handle Error
          this.showLoader = false;
          this.errorHandler.handleError(error);
        }
      });

      this.educationWidth.userId = this.username;
      this.educationWidth.width = 14;
      this.educationWidth.formname = 'Education';
      

      this.http.post('http://localhost:2020/saveWidth',this.educationWidth,{withCredentials : true}).subscribe({
          next : ()=>{
            
          },
          error : (error)=>{
            // Handle Error
            this.showLoader = false;
            this.errorHandler.handleError(error);
          },
          complete : () => {
            setTimeout( ()=> {
              this.showLoader = false;

              // Handle Response
              this.toastr.success('Education Details are saved !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

              educationform.reset();
            }, 2000);
          }
      });
  }

  resetEducationForm( educationform : NgForm ) : void {
      educationform.reset();
      this.showSecondary = "hidden";
      this.showHigherSecondary = "hidden";
      this.showDiploma = "hidden";
      this.showGraduation = "hidden";
  }

  showSaveCancelButton : String = "hidden";

  deleteSecondary(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteSecondary/userId='+this.username,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          responseData = response.secondary;
        },
        error : (error)=>{
          // Handle Error
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            this.getSecondary();

            // Handle Response
            this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          }, 2000);
        }
    });
  }


  deleteHigherSecondary(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteHigherSecondary/userId='+this.username,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          responseData = response.hs;
        },
        error : (error)=>{
          // Handle Error
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            this.getHigherSecondary();

            // Handle Response
            this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          }, 2000);
        }
    });
  }


  deleteDiploma(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteDiploma/userId='+this.username,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          responseData = response.diploma
        },
        error : (error)=>{
          // Handle Error
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            this.getDiploma();

            // Handle Response
            this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          }, 2000);
        }
    });
  }


  deleteGraduation(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteGraduation/userId='+this.username,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          responseData = response.graduation;
        },
        error : (error)=>{
          // Handle Error
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            this.getGraduation();
            
            // Handle Response
            this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          }, 2000);
        }
    });
  }

  showSecondaryModal: boolean = false;
  showHSModal : boolean = false;
  showDiplomaModal : boolean = false;
  showGraduationModal : boolean = false;

  openSecondaryModal(): void {
    this.showSecondaryModal = true;
  }

  openHSModal(): void {
    this.showHSModal = true;
  }

  openDiplomaModal(): void {
    this.showDiplomaModal = true;
  }

  openGraduationModal(): void {
    this.showGraduationModal = true;
  }

  onConfirmSecondary(result: boolean): void {
    this.showSecondaryModal = false;
    if (result) {
      this.deleteSecondary();
    }
  }

  onConfirmHS(result: boolean): void {
    this.showHSModal = false;
    if (result) {
      this.deleteHigherSecondary();
    }
  }

  onConfirmDiploma(result: boolean): void {
    this.showDiplomaModal = false;
    if (result) {
      this.deleteDiploma();
    }
  }

  onConfirmGraduation(result: boolean): void {
    this.showSecondaryModal = false;
    if (result) {
      this.deleteGraduation();
    }
  }

}
