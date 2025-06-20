import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ServiceService } from '../sharedService/service.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Child } from './child';
import { WifeHus } from './wife-hus';
import { Mother } from './mother';
import { Father } from './father';
import { Width } from 'src/app/Model/width';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent implements OnInit{

  constructor(private Sservice : ServiceService , private http : HttpClient , private authService : AuthService , 
    private router : Router , private toastr : ToastrService, private utils : SecureStorageUtilService, private errorHandler : GlobalErrorHandlerService
    , private activatedRoute : ActivatedRoute){}

  width : any;

  fatherData : any = new Father();
  motherData : any = new Mother();
  wifeHusData : any = new WifeHus();
  childData : any = new Child();
  username : any;
  allWidth : any = [];
  widthSum : any = 0;
  showLoader : boolean = false;
  familyData : any[] = [];

  ngOnInit(){
    this.username = this.utils.getItem('username');
    
    this.familyData = this.activatedRoute.snapshot.data['familyData'];

    this.fatherData = this.familyData[0];
    this.motherData = this.familyData[1];
    this.wifeHusData = this.familyData[2];
    this.childData = this.familyData[3];

    this.getFamilyWidth().subscribe({
      next : (response : any)=>{
        if(response.width!=0 && this.fatherData==null && this.motherData==null && this.wifeHusData==null && this.childData==null){
          this.http.delete('http://localhost:2020/deleteWidth/userId='+this.username+'/form=Family',{withCredentials : true}).subscribe({
            next : ()=>{
              //this.getAllWidth();
            },
            error : (error)=>{
              this.errorHandler.handleError(error);
            }
          });
        }
      },
      error:(error)=>{
        this.errorHandler.handleError(error);
      }
    });

    this.getAllWidth();
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

  getFamilyWidth() : Observable<any>{
    return this.http.get('http://localhost:2020/getWidth/userId='+this.username+'/form='+'Family', {withCredentials : true});
  }

  getFather(){
    this.http.get('http://localhost:2020/getFather/userId='+this.username , {withCredentials : true}).subscribe({
        next : (response : any)=>{
          this.fatherData = response.father;
        },
        error : (error)=>{
          this.errorHandler.handleError(error);
        }
    });
  }

  getMother(){
    this.http.get('http://localhost:2020/getMother/userId='+this.username, {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.motherData = response.mother;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getWifeHus(){
    this.http.get('http://localhost:2020/getWifeHus/userId='+this.username , {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.wifeHusData = response.wifeHus;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  getChild(){
    this.http.get('http://localhost:2020/getChild/userId='+this.username , {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.childData = response.child;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  showSaveCancelButton : String = "hidden";

  showFather : String = "hidden";

  fatherYes() : void{
      this.showFather = "inline-block";
      this.showSaveCancelButton = "inline-block";
  }

  showFamily : String = "inline-block";
  showButton : String = "inline-block";
  showEditDetails : String = "hidden";

  AddInformation() : void{
      this.showFamily = "hidden";
      this.showButton = "hidden";
      this.showEditDetails = "inline";
  }

  showMother : String = "hidden";

  motherYes() : void {
    this.showMother = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  showWifeHus : String = "hidden";

  WifeHusYes() : void {
     this.showWifeHus = "inline-block";
     this.showSaveCancelButton = "inline-block";
  }

  WifeHusNo(familyForm : NgForm) : void {

    this.showWifeHus = "hidden";

    familyForm.controls['wifeHusrelationship']?.setValue(' ');
    familyForm.controls['WifeHusfirstname']?.setValue(' ');
    familyForm.controls['WifeHusmiddlename']?.setValue(' ');
    familyForm.controls['WifeHuslastname']?.setValue(' ');
    familyForm.controls['WifeHusgender']?.setValue(' ');
    familyForm.controls['WifeHusdobf']?.setValue(' ');
    familyForm.controls['WifeHusnationality']?.setValue(' ');
    familyForm.controls['WifeHusqualification']?.setValue(' ');
    familyForm.controls['WifeHusoccupation']?.setValue(' ');
    familyForm.controls['WifeHuscontactnumber']?.setValue(' ');

  }

  showChild : String = "hidden";

  ChildYes() : void {
    this.showChild = "inline-block";
    this.showSaveCancelButton = "inline-block";
  }

  ChildNo(familydetailsform : NgForm) : void {
    this.showChild = "hidden";

    familydetailsform.controls['Childrelationship']?.setValue(' ');
    familydetailsform.controls['Childfirstname']?.setValue(' ');
    familydetailsform.controls['Childmiddlename']?.setValue(' ');
    familydetailsform.controls['Childlastname']?.setValue(' ');
    familydetailsform.controls['Childgender']?.setValue(' ');
    familydetailsform.controls['Childdobf']?.setValue(' ');
    familydetailsform.controls['Childnationality']?.setValue(' ');
    familydetailsform.controls['Childqualification']?.setValue(' ');
    familydetailsform.controls['Childoccupation']?.setValue(' ');
    familydetailsform.controls['Childcontactnumber']?.setValue(' ');
  }

  child = new Child();
  wifeHus = new WifeHus();
  mother = new Mother();
  father = new Father();

  successMessage : String = "";
  errorMessage : String = "";

  newWidth = new Width();

  storeFamilyForm(familydetailsform : NgForm){

    this.father.userId = this.username;
    this.mother.userId = this.username;
    this.wifeHus.userId = this.username;
    this.child.userId = this.username;

    this.showLoader = true;

    if(this.fatherData==null && this.motherData==null && this.wifeHusData==null && this.childData==null){
      
      this.newWidth.userId = this.username;
      this.newWidth.width = 14;
      this.newWidth.formname = 'Family';

      this.http.post('http://localhost:2020/saveWidth',this.newWidth,{withCredentials : true}).subscribe({
        next : ()=>{

        },
        error : (error)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
        }
      });
    }

    this.http.post('http://localhost:2020/saveFather',this.father,{withCredentials : true}).subscribe({
      next : (response : any)=>{
          this.successMessage = response.father;
      },
      error : (error : any)=>{
          this.showLoader = false;
          this.errorHandler.handleError(error);
      }
    });

    this.http.post('http://localhost:2020/saveMother',this.mother,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.successMessage = response.mother;
      },
      error : (error : any)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      }
    });

    this.http.post('http://localhost:2020/saveWifeHus',this.wifeHus,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.successMessage = response.wifeHus;
      },
      error : (error : any)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      }
    });

    this.http.post('http://localhost:2020/saveChild',this.child,{withCredentials : true}).subscribe({
      next : (response : any)=>{
          this.successMessage = response.child;
      },
      error : (error)=>{
        this.showLoader = false;
          this.errorHandler.handleError(error);
      },
      complete : () => {
        setTimeout( ()=> {
          this.showLoader = false;

          // Handle Response
          this.toastr.success('Family Details are saved !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

          familydetailsform.reset();
        }, 2000);
      }
    });
  }

  nameexpression = "^[a-zA-Z .]+$";

  resetFamilyDetailsForm(familydetailsform : NgForm){
      familydetailsform.reset();
      this.showFather = "hidden";
      this.showMother = "hidden";
      this.showWifeHus = "hidden";
      this.showChild = "hidden";
  }

  deleteFather(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteFather/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{

        responseData = response.father;

        if(this.wifeHusData!=null){
          if(this.wifeHusData.wifeHus=='false'){
            this.deleteWifeHus();
          }
        }

        if(this.childData!=null){
          if(this.childData.child=='false'){
            this.deleteChild();
          }
        }

        
      },
      error : (error)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },

      complete : () => {
        setTimeout( ()=> {
          this.showLoader = false;

          this.getFather();
          
          // Handle Response
          this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        }, 2000);
      }
    });
  }

  deleteMother(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteMother/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.getMother();

        responseData = response.mother;

        if(this.wifeHusData!=null){
          if(this.wifeHusData.wifeHus=='false'){
            this.deleteWifeHus();
          }
        }

        if(this.childData!=null){
          if(this.childData.child=='false'){
            this.deleteChild();
          }
        }
      },
      error : (error)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },

      complete : () => {
        setTimeout( ()=> {
          this.showLoader = false;

          // Handle Response
          this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        }, 2000);
      }
    });
  }

  deleteWifeHus(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteWifeHus/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.getWifeHus();

        responseData = response.wifehus;
      },
      error : (error)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },
      complete : () => {
        setTimeout( ()=> {
          this.showLoader = false;

          // Handle Response
          this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        }, 2000);
      }
    });
  }

  deleteChild(){

    this.showLoader = true;
    let responseData = '';

    this.http.delete('http://localhost:2020/deleteChild/userId='+this.username,{withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.getChild();
        responseData = response.child;
      },
      error : (error)=>{
        this.showLoader = false;
        this.errorHandler.handleError(error);
      },
      complete : () => {
        setTimeout( ()=> {
          this.showLoader = false;

          // Handle Response
          this.toastr.success(responseData,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        }, 2000);
      }
    });
  }

  showFatherModal: boolean = false;
  showMotherModal : boolean = false;
  showWifeHusModal : boolean = false;
  showChildModal : boolean = false;

  openFatherModal(): void {
    this.showFatherModal = true;
  }

  openMotherModal(): void {
    this.showMotherModal = true;
  }

  openWifehusModal(): void {
    this.showWifeHusModal = true;
  }

  openChildModal(): void {
    this.showChildModal = true;
  }

  onConfirmFather(result: boolean): void {
    this.showFatherModal = false;
    if (result) {
      this.deleteFather();
    }
  }

  onConfirmMother(result: boolean): void {
    this.showMotherModal = false;
    if (result) {
      this.deleteMother();
    }
  }

  onConfirmWifeHus(result: boolean): void {
    this.showWifeHusModal = false;
    if (result) {
      this.deleteWifeHus();
    }
  }

  onConfirmChild(result: boolean): void {
    this.showChildModal = false;
    if (result) {
      this.deleteChild();
    }
  }
}
