import { Component } from '@angular/core';
import { ServiceService } from '../sharedService/service.service';
import { Skill } from './skill';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Width } from 'src/app/Model/width';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent {

  constructor(private Sservice : ServiceService , private http : HttpClient , private authService : AuthService , 
    private toastr : ToastrService , private router : Router, private utils : SecureStorageUtilService, 
    private errorHandler : GlobalErrorHandlerService, private activatedRoute : ActivatedRoute
  ){}

  technicalData!: Skill[];
  username : any;
  allWidth : any = [];
  widthSum : any = 0;
  showLoader : boolean = false;

  ngOnInit(){

    this.username = this.utils.getItem('username');
    this.getAllWidth();

    this.technicalData = this.activatedRoute.snapshot.data['technicalData'];

    //this.getTechnicalData();
    this.verifyTechnicalDelete();

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

  verifyTechnicalDelete(){
    this.getTechnicalWidth().subscribe({
      next : (response : any)=>{
        if(response.width!=0 && this.technicalData?.length==0){
          this.http.delete('http://localhost:2020/deleteWidth/userId='+this.username+'/form=Technical',{withCredentials : true}).subscribe({
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

  getTechnicalWidth() : Observable<any>{
    return this.http.get('http://localhost:2020/getWidth/userId='+this.username+'/form='+'Technical', {withCredentials : true});
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

  showSaveCancelButton : String = "hidden";

  showCertification : String = "hidden";

  showTechnicalSkill : String = "inline-block";
  showButton : String = "inline-block";
  showEditDetails : String = "hidden";

  AddSkill() : void{
    this.showTechnicalSkill = "hidden";
    this.showButton = "hidden";
    this.showEditDetails = "inline-block";
    this.showCertification = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  skill = new Skill();

  successMessage : String = "";
  errorMessage : String = "";

  newWidth : any = new Width();

  storeTechnicalSkillForm(technicalskillform : NgForm) : void {

    this.skill.userId = this.username;
    this.showLoader = true;

    this.http.post('http://localhost:2020/saveTechnical/userId='+this.username,this.skill , {withCredentials : true}).subscribe({
      next : ()=>{
        this.getTechnicalData();
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

          technicalskillform.reset();
        }, 2000);
      }
    });


    if(this.technicalData.length==0){

      this.newWidth.userId = this.username;
      this.newWidth.width = 14;
      this.newWidth.formname = 'Technical';
  
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

  resetTechnicalSkillForm(technicalskillform : NgForm) : void {
    technicalskillform.reset();
  }

  deleteSkills(skillId : any){

    this.showLoader = true;
    let responseData = '';

    const params = new HttpParams().set('skillId',skillId);

    this.http.delete('http://localhost:2020/deleteTechnical/userId='+this.username,{params, withCredentials : true}).subscribe({
      next : (response : any)=>{
        responseData = response.technical;
      },
      error : (error)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },
      complete : () => {
        setTimeout( ()=> {
          this.showLoader = false;

          this.getTechnicalData();
          
          // Handle Response
          this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        }, 2000);
      }
    });
  }

  showSkillModal: boolean = false;

  openSkillModal(): void {
    this.showSkillModal = true;
  }

  onConfirmSkill(result: boolean, companyId: any): void {
    this.showSkillModal = false;
    if (result) {
      this.deleteSkills(companyId);
    }
  }
}
