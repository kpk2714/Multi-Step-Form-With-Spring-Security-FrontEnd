import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

    constructor(private router : Router) { }
  
    utils : SecureStorageUtilService = inject(SecureStorageUtilService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.utils.getItem('isAuthenticated') == 'true'){
      return false;
    }
    else{
      //this.router.navigate(['/login']);
      return true;
    }
  }
}
