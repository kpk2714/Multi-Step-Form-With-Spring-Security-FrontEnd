import { AfterViewInit, Component , ElementRef, Input, ViewChild } from '@angular/core';
import { PersonalService } from './personal.service';
import { AbstractControl, NgForm, NgModel, Validators } from '@angular/forms';
import { Personal } from './personal';
import { ServiceService } from '../sharedService/service.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { Width } from 'src/app/Model/width';
import { ImageService } from 'src/app/Service/image.service';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent  {

    constructor(private service : PersonalService,private Sservice:ServiceService, private http : HttpClient , private activatedRoute : ActivatedRoute
                , private authService : AuthService , private imageService : ImageService , private confirmService : NgConfirmService , 
                  private toastr : ToastrService , private router : Router, private utils : SecureStorageUtilService,
                  private errorHandler : GlobalErrorHandlerService){}

    @ViewChild('personalform') personalForm!: NgForm;

   // personalForm!: NgForm;

    state : any = [];
    district : any = [];
    width : any;
    personalData !: any; 
    submitBtn : boolean = true;
    editBtn : boolean = false;

    profilePicture : any;

    username : any;
    allWidth : any = [];
    widthSum : any = 0;
    showLoader : boolean = false;

    ngOnInit(){
        this.username = this.utils.getItem('username');
        this.state = this.service.state();
        this.personalData = this.activatedRoute.snapshot.data['personalData'];

        this.setDefaultValue();

        if(this.personalData.personal!=null){
            this.submitBtn = false;
            this.editBtn = true;
        }

        this.getAllWidth();
        this.loadImage();
    }

    getAllWidth(){

      this.http.get('http://localhost:2020/getAllWidth/userId='+this.username, {withCredentials : true}).subscribe({
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

    drivingHidden : String = "hidden";

    drivinglicenseYes(DLnumber : string,DLname : string,DLplace : string,personalform : NgForm) : void {
        this.drivingHidden = "inline";
  
        if(this.personalData==null){
          personalform.controls[DLnumber].setValue('');
          personalform.controls[DLname].setValue('');
          personalform.controls[DLplace].setValue('');
        }
    }

    drivinglicenseNo(DLnumber : string,DLname : string,DLplace : string,personalform : NgForm) : void {
      this.drivingHidden = "hidden";

      personalform.controls[DLnumber].setValue(' ');
      personalform.controls[DLname].setValue(' ');
      personalform.controls[DLplace].setValue(' ');
    }

    pancardHidden : String = "hidden";

    panCardYes(PCnumber : string,PCname : string,PCplace : string,personalform : NgForm) : void {
      this.pancardHidden = "inline";

      if(this.personalData==null){
        personalform.controls[PCnumber].setValue('');
        personalform.controls[PCname].setValue('');
        personalform.controls[PCplace].setValue('');
      }
    }

    panCardNo(PCnumber : string,PCname : string,PCplace : string,personalform : NgForm) : void {
      this.pancardHidden = "hidden";

      personalform.controls[PCnumber].setValue(' ');
      personalform.controls[PCname].setValue(' ');
      personalform.controls[PCplace].setValue(' ');
    }

    votercardHidden : String = "hidden";

    voterCardYes(VCnumber : string,VCname : string,VCplace : string,personalform : NgForm) : void {
      this.votercardHidden = "inline";
      
      if(this.personalData==null){
        personalform.controls[VCnumber].setValue('');
        personalform.controls[VCname].setValue('');
        personalform.controls[VCplace].setValue('');
      }
    }

    voterCardNo(VCnumber : string,VCname : string,VCplace : string,personalform : NgForm) : void {
      this.votercardHidden = "hidden";
      
      personalform.controls[VCnumber].setValue(' ');
      personalform.controls[VCname].setValue(' ');
      personalform.controls[VCplace].setValue(' ');
    }

    passportHidden : String = "hidden";

    passportYes(Passnumber : string,Passname : string,Passplace : string,personalform : NgForm) : void {
      this.passportHidden = "inline";
      
      if(this.personalData==null){
        personalform.controls[Passnumber].setValue('');
        personalform.controls[Passname].setValue('');
        personalform.controls[Passplace].setValue('');
      }
    }

    passportNo(Passnumber : string,Passname : string,Passplace : string,personalform : NgForm) : void {
      this.passportHidden = "hidden";
      
      personalform.controls[Passnumber].setValue(' ');
      personalform.controls[Passname].setValue(' ');
      personalform.controls[Passplace].setValue(' ');
    }

    personal = new Personal();

    isButtonClicked : boolean = false;

    savePersonalData!: Observable<any>;

    personalMessage : string = "";

    personalWidth = new Width();

    storePersonalForm( personalform : NgForm ) : void {
        
      this.isButtonClicked = true;
      this.personal.userId = this.username;
      this.showLoader = true;

      this.http.post('http://localhost:2020/savePersonal',this.personal,{withCredentials : true}).subscribe({
        next : (response : any) => {
            this.personalMessage = response.message;
            this.Sservice.setMessage(14);
        },

        error : (error) => {
            this.showLoader = false;
            this.errorHandler.handleError(error);
        }
      });

      this.personalWidth.userId = this.username;
      this.personalWidth.width = 14;
      this.personalWidth.formname = 'Personal';
      
      this.http.post('http://localhost:2020/saveWidth',this.personalWidth,{withCredentials : true}).subscribe({
        next : (response) => {
          
        },

        error : (error) => {
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            // Handle Response
            this.toastr.success('Personal Details are saved !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

            personalform.reset();
          }, 2000);
        }
      });
    }


    updatePersonalForm(personalform : NgForm) : void {

      this.showLoader = true;
      this.personal.userId = this.username;

      this.http.put('http://localhost:2020/updatePersonal',this.personal,{withCredentials : true}).subscribe({
        next : (response : any) => {
          this.personalMessage = response.message;
        },

        error : (error) => {
          // if(error.error.message == 'Unauthorized User') { // Use toaster
          //   this.toastr.error('You are Unauthorized !!!','Error' , {timeOut : 2000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
          // }

          // if(error.error.message == 'Personal Data is not saved . First save the data !!!') {
          //   this.personalMessage = error.error.message;
          // }
          this.showLoader = false;
          this.errorHandler.handleError(error);
        },
        complete : () => {
          setTimeout( ()=> {
            this.showLoader = false;
  
            // Handle Response
            this.toastr.success('Personal Details are updated !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

            personalform.reset();
          }, 2000);
        }
      });
    }


    setDefaultValue(){

        if(this.personalData.personal!=null){
          this.personal.title =  this.personalData.personal.title;
          this.personal.firstname = this.personalData.personal.firstname;
          this.personal.middlename = this.personalData.personal.middlename;
          this.personal.lastname = this.personalData.personal.lastname;
          this.personal.gender = this.personalData.personal.gender;
          this.personal.dob = this.personalData.personal.dob;
          this.personal.email = this.personalData.personal.email;
          this.personal.relation = this.personalData.personal.relation;
          this.personal.alteremail = this.personalData.personal.alteremail;
          this.personal.mobile = this.personalData.personal.mobile;
          this.personal.altermobile = this.personalData.personal.altermobile;
          this.personal.relationpersonname = this.personalData.personal.relationpersonname;
          this.personal.relationpersonmobile = this.personalData.personal.relationpersonmobile;
          this.personal.nationality = this.personalData.personal.nationality;
          this.personal.citizen = this.personalData.personal.citizen;
          this.personal.religion = this.personalData.personal.religion;
          this.personal.state = this.personalData.personal.state;
          this.personal.district = this.personalData.personal.district;
          this.personal.blood = this.personalData.personal.blood;
          this.personal.reservation = this.personalData.personal.reservation;
          this.personal.aadhar = this.personalData.personal.aadhar;
          this.personal.marital = this.personalData.personal.marital;
          this.personal.drivinglicense = this.personalData.personal.drivinglicense;
          this.personal.drivinglicensenumber = this.personalData.personal.drivinglicensenumber;
          this.personal.drivinglicensename = this.personalData.personal.drivinglicensename;
          this.personal.drivinglicenseplace = this.personalData.personal.drivinglicenseplace;
          this.personal.pancard = this.personalData.personal.pancard;
          this.personal.pancardnumber = this.personalData.personal.pancardnumber;
          this.personal.pancardname = this.personalData.personal.pancardname;
          this.personal.pancardplace = this.personalData.personal.pancardplace;
          this.personal.votercard = this.personalData.personal.votercard;
          this.personal.votercardnumber = this.personalData.personal.votercardnumber;
          this.personal.votercardname = this.personalData.personal.votercardname;
          this.personal.votercardplace = this.personalData.personal.votercardplace;
          this.personal.passport = this.personalData.personal.passport;
          this.personal.passportnumber = this.personalData.personal.passportnumber;
          this.personal.passportname = this.personalData.personal.passportname;
          this.personal.passportplace = this.personalData.personal.passportplace;
          this.personal.address1 = this.personalData.personal.address1;
          this.personal.address2 = this.personalData.personal.address2;
          this.personal.landmark = this.personalData.personal.landmark;
          this.personal.country = this.personalData.personal.country;
          this.personal.mailingstate = this.personalData.personal.mailingstate;
          this.personal.mailingdistrict = this.personalData.personal.mailingdistrict;
          this.personal.city = this.personalData.personal.city;
          this.personal.postalcode = this.personalData.personal.postalcode;
        }
        
    }

    canExist(){
      if((this.personal.title==null || this.personal.firstname==null || this.personal.lastname==null || this.personal.gender==null 
        || this.personal.dob==null || this.personal.email==null || this.personal.relation==null || this.personal.mobile==null || this.personal.relationpersonname==null
        || this.personal.relationpersonmobile==null || this.personal.nationality==null || this.personal.citizen==null || this.personal.religion==null 
        || this.personal.state==null || this.personal.district==null || this.personal.blood==null || this.personal.reservation==null || this.personal.aadhar==null 
        || this.personal.marital==null || this.personal.drivinglicense==null || this.personal.drivinglicensenumber==null || this.personal.drivinglicensename==null 
        || this.personal.drivinglicenseplace==null || this.personal.pancard==null || this.personal.pancardnumber==null || this.personal.pancardplace==null 
        || this.personal.pancardname==null || this.personal.votercard==null || this.personal.votercardnumber==null || this.personal.votercardname==null 
        || this.personal.votercardplace==null || this.personal.passport==null || this.personal.passportnumber==null || this.personal.passportname==null 
        || this.personal.votercardplace==null || this.personal.address1==null || this.personal.country==null || this.personal.mailingstate==null 
        || this.personal.mailingdistrict==null || this.personal.city==null || this.personal.postalcode==null)
      )
      
      {
        return confirm('You have unsaved changes . Do you want to navigate away ?');
      }

      else{
        return true;
      }
    }

    resetPersonalForm( personalform : NgForm ) : void {
        personalform.reset();
        this.drivingHidden = "hidden";
        this.pancardHidden = "hidden";
        this.votercardHidden = "hidden";
        this.passportHidden = "hidden";
    }


    outline : String = "focus:outline-none";

    nameexpression = "^[a-zA-Z .]+$";

    selectedFile!: File;
    imageUrl : any = "assets/images/person.jpg";



    onFileSelected(event : any , profilePic : NgModel){
      this.selectedFile = event.target.files[0];
      if(this.selectedFile){
        this.validateFile(this.selectedFile,profilePic);
      }
    }

    onUpload(picture : HTMLInputElement){
        this.imageService.uploadImage(this.selectedFile).subscribe({
          next : ()=>{
            this.loadImage();
            // picture.value = '';
          },
          error : (error)=>{
            console.log(error);
          }
        })
    }

    loadImage(){
      this.imageService.getImage(this.username).subscribe({
          next : (imageBlob)=>{
            const reader = new FileReader();
            reader.addEventListener('load',()=>{
              this.imageUrl = reader.result;
            },false);

            if(imageBlob){
              reader.readAsDataURL(imageBlob);
            }
          },
          error : (error)=>{
            console.log(error);
          }
      });
    }

    allowedTypes = ['image/png', 'image/jpeg' , 'image/jpg'];
    maxSize = 5 * 1024 * 1024; // 5MB

    validateFile(file : File , profilePic : NgModel){
        const fileInputControl = profilePic.control;

        if (!this.allowedTypes.includes(file.type)) {
          fileInputControl.setErrors({ invalidFileType: true });
        } else if (file.size > this.maxSize) {
          fileInputControl.setErrors({ fileTooLarge: true });
        } else {
          fileInputControl.setErrors(null);
        }
    }

}
