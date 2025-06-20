import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiStepRegistrationComponent } from './multi-step-registration/multi-step-registration.component';
import { NavOneComponent } from './nav-one/nav-one.component';
import { NavTwoComponent } from './nav-two/nav-two.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './multi-step-registration/home/home.component';
import { CandidateRegisterFormComponent } from './multi-step-registration/candidate-register-form/candidate-register-form.component';
import { HelpDeskComponent } from './multi-step-registration/help-desk/help-desk.component';
import { PersonalDetailsComponent } from './multi-step-registration/candidate-register-form/personal-details/personal-details.component';
import { EducationDetailsComponent } from './multi-step-registration/candidate-register-form/education-details/education-details.component';
import { FamilyDetailsComponent } from './multi-step-registration/candidate-register-form/family-details/family-details.component';
import { WorkExperienceComponent } from './multi-step-registration/candidate-register-form/work-experience/work-experience.component';
import { TechnicalSkillsComponent } from './multi-step-registration/candidate-register-form/technical-skills/technical-skills.component';
import { LanguagesKnownComponent } from './multi-step-registration/candidate-register-form/languages-known/languages-known.component';
import { DocumentsUploadComponent } from './multi-step-registration/candidate-register-form/documents-upload/documents-upload.component';
import { DeclarationsComponent } from './multi-step-registration/candidate-register-form/declarations/declarations.component';
import { CandidateNavComponent } from './multi-step-registration/candidate-register-form/candidate-nav/candidate-nav.component';
import { FormsModule } from '@angular/forms';
import { DataprivacyComponent } from './multi-step-registration/candidate-register-form/documents-upload/dataprivacy/dataprivacy.component';
import { ProofOfAgeComponent } from './multi-step-registration/candidate-register-form/documents-upload/proof-of-age/proof-of-age.component';
import { NgConfirmModule } from 'ng-confirm-box';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReplyComponent } from './multi-step-registration/help-desk/reply/reply.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FrontComponent } from './front/front.component';
import { DomainComponent } from './SSO/domain/domain.component';
import { EmailVerifyComponent } from './SSO/email-verify/email-verify.component';
import { AuthenticatorVerifyComponent } from './SSO/authenticator-verify/authenticator-verify.component';
import { AuthOtpVerifyComponent } from './SSO/auth-otp-verify/auth-otp-verify.component';
import { BindAuthenticatorComponent } from './bind-authenticator/bind-authenticator.component';
import { VerifyAuthenticatorComponent } from './verify-authenticator/verify-authenticator.component';



@NgModule({
  declarations: [
    AppComponent,
    MultiStepRegistrationComponent,
    NavOneComponent,
    NavTwoComponent,
    LoginComponent,
    HomeComponent,
    CandidateRegisterFormComponent,
    HelpDeskComponent,
    PersonalDetailsComponent,
    EducationDetailsComponent,
    FamilyDetailsComponent,
    WorkExperienceComponent,
    TechnicalSkillsComponent,
    LanguagesKnownComponent,
    DocumentsUploadComponent,
    DeclarationsComponent,
    CandidateNavComponent,
    DataprivacyComponent,
    ProofOfAgeComponent,
    ConfirmComponent,
    ReplyComponent,
    FrontComponent,
    DomainComponent,
    EmailVerifyComponent,
    AuthenticatorVerifyComponent,
    AuthOtpVerifyComponent,
    BindAuthenticatorComponent,
    VerifyAuthenticatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    NgConfirmModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, 
      positionClass: 'toast-top-center', 
      preventDuplicates: true, 
      progressBar: true, 
      closeButton: true,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
