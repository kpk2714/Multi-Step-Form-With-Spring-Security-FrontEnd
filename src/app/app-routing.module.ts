import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepRegistrationComponent } from './multi-step-registration/multi-step-registration.component';
import { HomeComponent } from './multi-step-registration/home/home.component';
import { CandidateRegisterFormComponent } from './multi-step-registration/candidate-register-form/candidate-register-form.component';
import { HelpDeskComponent } from './multi-step-registration/help-desk/help-desk.component';
import { PersonalDetailsComponent } from './multi-step-registration/candidate-register-form/personal-details/personal-details.component';
import { LoginComponent } from './login/login.component';
import { EducationDetailsComponent } from './multi-step-registration/candidate-register-form/education-details/education-details.component';
import { FamilyDetailsComponent } from './multi-step-registration/candidate-register-form/family-details/family-details.component';
import { WorkExperienceComponent } from './multi-step-registration/candidate-register-form/work-experience/work-experience.component';
import { TechnicalSkillsComponent } from './multi-step-registration/candidate-register-form/technical-skills/technical-skills.component';
import { LanguagesKnownComponent } from './multi-step-registration/candidate-register-form/languages-known/languages-known.component';
import { DocumentsUploadComponent } from './multi-step-registration/candidate-register-form/documents-upload/documents-upload.component';
import { DeclarationsComponent } from './multi-step-registration/candidate-register-form/declarations/declarations.component';
import { DataprivacyComponent } from './multi-step-registration/candidate-register-form/documents-upload/dataprivacy/dataprivacy.component';
import { ProofOfAgeComponent } from './multi-step-registration/candidate-register-form/documents-upload/proof-of-age/proof-of-age.component';
import { AuthGuardService, resolveAllDocument, resolveCompanyData, resolveEducationalData, resolveFamilyData, resolveLanguageData, resolvePersonalData, resolveTechnicalData } from './Service/auth-guard.service';
import { ReplyComponent } from './multi-step-registration/help-desk/reply/reply.component';
import { LoginService } from './Service/LoginService/login.service';
import { DomainComponent } from './SSO/domain/domain.component';
import { EmailVerifyComponent } from './SSO/email-verify/email-verify.component';
import { AuthenticatorVerifyComponent } from './SSO/authenticator-verify/authenticator-verify.component';
import { AuthOtpVerifyComponent } from './SSO/auth-otp-verify/auth-otp-verify.component';
import { BindAuthenticatorComponent } from './bind-authenticator/bind-authenticator.component';
import { VerifyAuthenticatorComponent } from './verify-authenticator/verify-authenticator.component';
import { SSOButtonService } from './Service/SSOLoginService/ssobutton.service';
import { DomainButtonService } from './Service/SSOLoginService/domain-button.service';
import { EmailButtonService } from './Service/SSOLoginService/email-button.service';
import { AuthButtonService } from './Service/SSOLoginService/auth-button.service';

const routes: Routes = [
    { path : '' , component : LoginComponent},
    { path : 'login' , component : LoginComponent, canActivate : [LoginService]},
    
    { path : 'authenticator', children : [
        { path : 'bind', component : BindAuthenticatorComponent},
        { path : 'verify', component : VerifyAuthenticatorComponent}
    ]},

    { path : 'student/pages' , component : MultiStepRegistrationComponent , canActivate : [AuthGuardService]},
    { path : 'student/pages/home' , component : HomeComponent, canActivate : [AuthGuardService]},
    { path : 'student/pages/candidate-register' , component : CandidateRegisterFormComponent , canActivate : [AuthGuardService] },

    { path : 'student/pages/candidate-register' , canActivate : [AuthGuardService] , children : [

      { path : 'personal-details' , component : PersonalDetailsComponent , canDeactivate : [AuthGuardService] , resolve : {personalData : resolvePersonalData} },
      { path : 'education-details' , component : EducationDetailsComponent, resolve : {educationalData : resolveEducationalData}},
      { path : 'family-details' , component : FamilyDetailsComponent, resolve : {familyData : resolveFamilyData}},
      { path : 'work-experience' , component : WorkExperienceComponent, resolve : {workData : resolveCompanyData}},
      { path : 'technical-skills' , component : TechnicalSkillsComponent, resolve : {technicalData : resolveTechnicalData}},
      { path : 'languages-known' , component : LanguagesKnownComponent, resolve : {languageData : resolveLanguageData}},
      { path : 'documents-upload' , component : DocumentsUploadComponent, resolve : {allDocument : resolveAllDocument}},
      { path : 'education-details' , component : EducationDetailsComponent},
      { path : 'declarations' , component : DeclarationsComponent},
      { path : 'documents-upload/dataprivacy' , component : DataprivacyComponent},
      { path : 'documents-upload/proof-of-age' , component : ProofOfAgeComponent},

    ]},

    
    { path : 'student/pages/helpdesk' , component : HelpDeskComponent , canActivate : [AuthGuardService]},

    { path : 'student/pages/helpdesk' , canActivate : [AuthGuardService] , children : [
      { path : 'reply' , component : ReplyComponent }
    ]},

    { path : 'sso', children : [
        { path : 'domain', component : DomainComponent, canActivate : [SSOButtonService] },
        { path : 'email/verify', component : EmailVerifyComponent, canActivate : [DomainButtonService] },
        { path : 'authenticator/verify', component : AuthenticatorVerifyComponent, canActivate : [EmailButtonService]},
        { path : 'authenticator/otp-verify', component : AuthOtpVerifyComponent, canActivate : [AuthButtonService]}
    ]},

    { path : '**', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
