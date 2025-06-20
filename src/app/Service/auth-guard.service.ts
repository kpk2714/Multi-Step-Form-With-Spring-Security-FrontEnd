import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Event, NavigationStart, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../login/user/user';
import { Personal } from '../multi-step-registration/candidate-register-form/personal-details/personal';
import { PersonalDetailsComponent } from '../multi-step-registration/candidate-register-form/personal-details/personal-details.component';
import { PersonalService } from '../multi-step-registration/candidate-register-form/personal-details/personal.service';
import { SecureStorageUtilService } from '../utility/secure-storage-util.service';
import { EducationalService } from './EducationalService/educational.service';
import { FamilyService } from './FamilyService/family.service';
import { WorkService } from './WorkService/work.service';
import { TechnicalService } from './TechnicalService/technical.service';
import { LanguageService } from './LanguageService/language.service';
import { DocumentService } from './DocumentService/document.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate , CanDeactivate<PersonalDetailsComponent> {

  constructor(private router : Router) { }

  utils : SecureStorageUtilService = inject(SecureStorageUtilService);

  canDeactivate(component: PersonalDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canExist();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(this.utils.getItem('isAuthenticated') == 'true'){
        return true;
      }
      else{
          this.router.navigate(['/login']);
          return false;
      }
  }
}

export const resolvePersonalData = ()=>{
  const personalService = inject(PersonalService);
  return personalService.getAllPersonalData();
}

export const resolveEducationalData = ()=>{
  const educationalService = inject(EducationalService);
  return educationalService.getAllEducationData();
}

export const resolveFamilyData = ()=>{
  const familyService = inject(FamilyService);
  return familyService.getAllFamilyData();
}

export const resolveCompanyData = ()=>{
  const workService = inject(WorkService);
  return workService.getAllCompanyData();
}

export const resolveTechnicalData = ()=>{
  const technicalService = inject(TechnicalService);
  return technicalService.getAllTechnicalData();
}

export const resolveLanguageData = ()=>{
  const languageService = inject(LanguageService);
  return languageService.getAllLanguageData();
}

export const resolveAllDocument = ()=>{
  const documentService = inject(DocumentService);
  return documentService.getAllDocument();
}
