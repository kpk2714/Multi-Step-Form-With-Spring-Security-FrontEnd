import { Component } from '@angular/core';
import { ServiceService } from '../sharedService/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { Width } from 'src/app/Model/width';
import { PdfService } from 'src/app/Service/pdf.service';
import { ToastrService } from 'ngx-toastr';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';

@Component({
  selector: 'app-documents-upload',
  templateUrl: './documents-upload.component.html',
  styleUrls: ['./documents-upload.component.css']
})
export class DocumentsUploadComponent {

  constructor(private Sservice : ServiceService,private route : Router , private http : HttpClient , 
              private authService : AuthService , private pdfService : PdfService , private router : Router , 
              private toastr : ToastrService, private utils : SecureStorageUtilService,
              private errorHandler : GlobalErrorHandlerService, private activatedRoute : ActivatedRoute){}

  username : any;
  allWidth : any = [];
  widthSum : any = 0;
  showLoader : boolean = false;

  ngOnInit(){

    this.username = this.utils.getItem('username');
    this.getAllWidth();

    //this.getProofOfAge();

    this.proofOfAgePdf = this.activatedRoute.snapshot.data['allDocument'];
    
    this.getDrivingLicense();
    this.getPassport();
    this.getAadharcard();
    this.getPancard();
    this.getSSC();
    this.getHSC();
    this.getDegree();
    this.getProvisional();
    this.getPostDegree();
    this.getPostProvisional();
    this.getDiploma();
    this.getDiplomaprovisional();
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

  showDataPrivacy : any = "hidden";

  viewDataPrivacy() : void {
    if(this.showDataPrivacy === "inline-block"){
      this.showDataPrivacy = "hidden";
    }
    else{
      this.showDataPrivacy = "inline-block";
    }
  }

  clickToViewDataPrivacy() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/dataprivacy");
  }

  showProofOfAge : any = "hidden";

  viewProofOfAge() : void {
    if(this.showProofOfAge === "inline-block"){
      this.showProofOfAge = "hidden";
    }
    else{
      this.showProofOfAge = "inline-block";
    }

    this.Sservice.setMessage(16);
  }

  clickToViewProofOFAge() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showDrivingLicense : String = "hidden";

  viewDrivingLicense() : void {
    if(this.showDrivingLicense === "inline-block"){
      this.showDrivingLicense = "hidden";
    }
    else{
      this.showDrivingLicense = "inline-block";
    }
  }

  clickToViewDrivingLicense() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showPassport : String = "hidden";

  viewPassport() : void {
    if(this.showPassport === "inline-block"){
      this.showPassport = "hidden";
    }
    else{
      this.showPassport = "inline-block";
    }
  }

  clickToViewPassport() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showPanCard : String = "hidden";

  viewPanCard() : void {
    if(this.showPanCard === "inline-block"){
      this.showPanCard = "hidden";
    }
    else{
      this.showPanCard = "inline-block";
    }
  }

  clickToViewPanCard() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showAadharCard : String = "hidden";

  viewAadharCard() : void {
    if(this.showAadharCard === "inline-block"){
      this.showAadharCard = "hidden";
    }
    else{
      this.showAadharCard = "inline-block";
    }
  }

  clickToViewAadharCard() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showSSC : String = "hidden";

  viewSSC() : void {
    if(this.showSSC === "inline-block"){
      this.showSSC = "hidden";
    }
    else{
      this.showSSC = "inline-block";
    }
  }

  clickToViewSSC() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showHSC : String = "hidden";

  viewHSC() : void {
    if(this.showHSC === "inline-block"){
      this.showHSC = "hidden";
    }
    else{
      this.showHSC = "inline-block";
    }
  }

  clickToViewHSC() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showDegreeMarksheet : String = "hidden";

  viewDegreeMarksheet() : void {
    if(this.showDegreeMarksheet === "inline-block"){
      this.showDegreeMarksheet = "hidden";
    }
    else{
      this.showDegreeMarksheet = "inline-block";
    }
  }

  clickToViewDegreeMarksheet() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showProvisionalOrPassing : String = "hidden";

  viewProvisionalOrPassing() : void {
    if(this.showProvisionalOrPassing === "inline-block"){
      this.showProvisionalOrPassing = "hidden";
    }
    else{
      this.showProvisionalOrPassing = "inline-block";
    }
  }

  clickToViewProvisionalOrPassing() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showPostDegreeMarksheet : String = "hidden";

  viewPostDegreeMarksheet() : void {
    if(this.showPostDegreeMarksheet === "inline-block"){
      this.showPostDegreeMarksheet = "hidden";
    }
    else{
      this.showPostDegreeMarksheet = "inline-block";
    }
  }

  clickToViewPostDegreeMarksheet() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showPostDegreeProvisionalOrPassing : String = "hidden";

  viewPostDegreeProvisionalOrPassing() : void {
    if(this.showPostDegreeProvisionalOrPassing === "inline-block"){
      this.showPostDegreeProvisionalOrPassing = "hidden";
    }
    else{
      this.showPostDegreeProvisionalOrPassing = "inline-block";
    }
  }

  clickToViewPostDegreeProvisionalOrPassing() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showDiplomaMarksheet : String = "hidden";

  viewDiplomaMarksheet() : void {
    if(this.showDiplomaMarksheet === "inline-block"){
      this.showDiplomaMarksheet = "hidden";
    }
    else{
      this.showDiplomaMarksheet = "inline-block";
    }
  }

  clickToViewDiplomaMarksheet() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  showDiplomaProvisionalOrPassing : String = "hidden";

  viewDiplomaProvisionalOrPassing() : void {
    if(this.showDiplomaProvisionalOrPassing === "inline-block"){
      this.showDiplomaProvisionalOrPassing = "hidden";
    }
    else{
      this.showDiplomaProvisionalOrPassing = "inline-block";
    }
  }

  clickToViewDiplomaProvisionalOrPassing() : void {
    this.route.navigateByUrl("pages/candidate-register/documents-upload/proof-of-age");
  }

  isBtnClicked : boolean = false;

  selectedFile!: File;

  fileUrl!: String;

  onFileSelected(event : any , document : NgModel){
    this.selectedFile = event.target.files[0];
    if(this.selectedFile){
      this.validateFile(this.selectedFile,document);
    }
  }


  allowedTypes = ['application/pdf'];
    maxSize = 15 * 1024 * 1024; // 5MB

    validateFile(file : File , document : NgModel){
        const fileInputControl = document.control;

        if (!this.allowedTypes.includes(file.type)) {
          fileInputControl.setErrors({ invalidFileType: true });
        } else if (file.size > this.maxSize) {
          fileInputControl.setErrors({ fileTooLarge: true });
        } else {
          fileInputControl.setErrors(null);
        }
    }

  onUploadProofOfAge(proofOfAge : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'ProofOfAge','Pending').subscribe({
      next : ()=>{
        this.getProofOfAge();
        proofOfAge.value = "";
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  onViewProofOfAge(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','ProofOfAge').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  onUploadDrivingLicense(drivingLicense : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'DrivingLicense','Pending').subscribe({
      next : ()=>{
        this.getDrivingLicense();
        drivingLicense.value = '';
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  onViewDrivingLicense(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','DrivingLicense').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  onUploadPassport(passport : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'Passport','Pending').subscribe({
      next : ()=>{
        this.getPassport();
        passport.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewPassport(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','Passport').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadPancard(pancard : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'Pancard','Pending').subscribe({
      next : ()=>{
        this.getPancard();
        pancard.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewPancard(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','Pancard').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadAadharcard(aadharcard : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'Aadharcard','Pending').subscribe({
      next : ()=>{
        this.getAadharcard();
        aadharcard.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewAadharcard(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','Aadharcard').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onUploadSSC(SSC : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'SSC','Pending').subscribe({
      next : ()=>{
        this.getSSC();
        SSC.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewSSC(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','SSC').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadHSC(HSC : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'HSC','Pending').subscribe({
      next : ()=>{
        this.getHSC();
        HSC.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewHSC(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','HSC').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadDegree(Degree : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'Degree','Pending').subscribe({
      next : ()=>{
        this.getDegree();
        Degree.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewDegree(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','Degree').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadProvisional(provisional : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'Provisional','Pending').subscribe({
      next : ()=>{
        this.getProvisional();
        provisional.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewProvisional(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','Provisional').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadPostDegree(postdegree : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'PostDegree','Pending').subscribe({
      next : ()=>{
        this.getPostDegree();
        postdegree.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewPostDegree(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','PostDegree').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadPostProvisional(postprovisional : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'PostProvisional','Pending').subscribe({
      next : ()=>{
        this.getPostProvisional();
        postprovisional.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewPostProvisional(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','PostProvisional').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadDiploma(diploma : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'Diploma','Pending').subscribe({
      next : ()=>{
        this.getDiploma();
        diploma.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewDiploma(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','Diploma').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  onUploadDiplomaprovisional(diplomaprovisional : HTMLInputElement){
    this.pdfService.upload('http://localhost:2020/savePdf',this.selectedFile,'DiplomaProvisional','Pending').subscribe({
      next : ()=>{
        this.getDiplomaprovisional();
        diplomaprovisional.value = '';
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }

  onViewDiplomaprovisional(){
    this.pdfService.getPdf('http://localhost:2020/getPdf','DiplomaProvisional').subscribe({
      next : (response : any)=>{
        const url = window.URL.createObjectURL(response);
        this.fileUrl = url;
        window.open(url);
      },
      error : (error)=>{
        console.log(error);
      }
    });
  }


  proofOfAgePdf : any;
 

  getProofOfAge(){

    const ageParameter = new HttpParams().set('documentName' , 'ProofOfAge').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : ageParameter , withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.proofOfAgePdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  drivingLicensePdf : any;

  getDrivingLicense(){

    const drivingParameter = new HttpParams().set('documentName' , 'DrivingLicense').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : drivingParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.drivingLicensePdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  passportPdf : any;

  getPassport(){

    const passportParameter = new HttpParams().set('documentName' , 'Passport').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : passportParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.passportPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  pancardPdf : any;

  getPancard(){
    
    const pancardParameter = new HttpParams().set('documentName' , 'Pancard').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : pancardParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.pancardPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  aadharcardPdf : any;

  getAadharcard(){
    
    const aadharcardParameter = new HttpParams().set('documentName' , 'Aadharcard').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : aadharcardParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.aadharcardPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  sscPdf : any;

  getSSC(){
   
    const sscParameter = new HttpParams().set('documentName' , 'SSC').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : sscParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.sscPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  hscPdf : any;

  getHSC(){
  
    const hscParameter = new HttpParams().set('documentName' , 'HSC').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : hscParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.hscPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  degreePdf : any;

  getDegree(){
    
    const degreeParameter = new HttpParams().set('documentName' , 'Degree').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : degreeParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.degreePdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  provisionalPdf : any;

  getProvisional(){
    
    const provisionalParameter = new HttpParams().set('documentName' , 'Provisional').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : provisionalParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.provisionalPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  postdegreePdf : any;

  getPostDegree(){
   
    const postdegreeParameter = new HttpParams().set('documentName' , 'PostDegree').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : postdegreeParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.postdegreePdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  postprovisionalPdf : any;

  getPostProvisional(){
   
    const postprovisionalParameter = new HttpParams().set('documentName' , 'PostProvisional').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : postprovisionalParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.postprovisionalPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  diplomaPdf : any;

  getDiploma(){
    
    const diplomaParameter = new HttpParams().set('documentName' , 'Diploma').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : diplomaParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.diplomaPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  diplomaprovisionalPdf : any;

  getDiplomaprovisional(){
    
    const diplomaprovisionalParameter = new HttpParams().set('documentName' , 'DiplomaProvisional').set('userId',this.username);

    this.http.get('http://localhost:2020/getPdfByDocumentName',{params : diplomaprovisionalParameter, withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.diplomaprovisionalPdf = response.pdf;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }


  newWidth : any = new Width();

  successMessage : string = "";
  errorMessage : string = "";

  dummyValue : any;

  storeDocumentUploadForm(documentsUploadForm : NgForm) : void {

    this.showLoader = true;
    this.newWidth.userId = this.username;
    this.newWidth.width = 16;
    this.newWidth.formname = 'Documents';

    this.http.post('http://localhost:2020/saveWidth',this.newWidth,{withCredentials : true}).subscribe({
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
          this.toastr.success('All Documents are uploaded !','Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});

          documentsUploadForm.reset();
        }, 2000);
      }
    });
  }
}
