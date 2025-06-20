import { Component } from '@angular/core';
import { ServiceService } from '../sharedService/service.service';
import { NgForm } from '@angular/forms';
import { Work } from './work';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Width } from 'src/app/Model/width';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {


  constructor(private Sservice : ServiceService , private http : HttpClient , private authService : AuthService , 
    private toastr : ToastrService , private router : Router, private utils : SecureStorageUtilService, 
    private errorHandler : GlobalErrorHandlerService, private activatedRoute : ActivatedRoute
  ){}

  companyData !: Work[];
  username : any;
  allWidth : any = [];
  widthSum : any = 0;
  showLoader : boolean = false;

  ngOnInit(){
    
    this.username = this.utils.getItem('username');

    this.companyData = this.activatedRoute.snapshot.data['workData'];

    this.getAllWidth();
    //this.getCompanyData();
    this.verifyCompanyDelete();

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

  verifyCompanyDelete(){
    this.getCompanyWidth().subscribe({
      next : (response : any)=>{
        if(response.width!=0 && this.companyData?.length==0){
          this.http.delete('http://localhost:2020/deleteWidth/userId='+this.username+'/form=Work-Experience',{withCredentials : true}).subscribe({
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

  getCompanyWidth() : Observable<any>{
    return this.http.get('http://localhost:2020/getWidth/userId='+this.username+'/form='+'Work-Experience', {withCredentials : true});
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

  showSaveCancelButton : String = "hidden";

  showCompany : String = "hidden";

  showWorkExperience : String = "inline-block";
  showButton : String = "inline-block";
  showEditDetails : String = "hidden";

  AddWork() : void{
    this.showWorkExperience = "hidden";
    this.showButton = "hidden";
    this.showEditDetails = "inline-block";
    this.showCompany = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  work = new Work();

  successMessage : String = "";
  errorMessage : String = "";

  workWidth : any = new Width();

  storeWorkExperienceForm(workexperienceform : NgForm) : void {

    this.work.userId = this.username;
    this.showLoader = true;

    this.http.post('http://localhost:2020/saveCompany',this.work,{withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.successMessage = response.company;
          this.getCompanyData();
        },
        error : (error)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            // Handle Response
            this.toastr.success('Company Details are saved !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

            workexperienceform.reset();
          }, 2000);
        }
    });

    if(this.companyData.length==0){

        this.workWidth.userId = this.username;
        this.workWidth.width = 14;
        this.workWidth.formname = 'Work-Experience';

        this.http.post('http://localhost:2020/saveWidth',this.workWidth,{withCredentials : true}).subscribe({
            next : ()=>{
            },
            error : (error)=>{
              this.errorHandler.handleError(error);
            }
        });
    }
  }

  nameexpression = "^[a-zA-Z .]+$";

  resetWorkExperienceForm(workexperienceform : NgForm) : void {
    workexperienceform.reset();
  }

  deleteWork(companyId : any){

    this.showLoader = true;
    let responseData = '';

    const params = new HttpParams().set('companyId',companyId);

    this.http.delete('http://localhost:2020/deleteWork/userId='+this.username,{params, withCredentials : true}).subscribe({
      next : (response : any)=>{
        responseData = response.company;
      },
      error : (error)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },
      complete : () => {
        setTimeout( ()=> {
          this.showLoader = false;

          this.getCompanyData();
          
          // Handle Response
          this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        }, 2000);
      }
    })
  }

  showWorkModal: boolean = false;

  openWorkModal(): void {
    this.showWorkModal = true;
  }

  onConfirmWork(result: boolean, companyId: any): void {
    this.showWorkModal = false;
    if (result) {
      this.deleteWork(companyId);
    }
  }
}
