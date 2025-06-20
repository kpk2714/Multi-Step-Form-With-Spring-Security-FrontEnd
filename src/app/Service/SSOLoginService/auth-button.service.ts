import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthButtonService implements CanActivate {

  constructor(private router : Router) { }
    utils : SecureStorageUtilService = inject(SecureStorageUtilService);
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        const encodedKey = this.utils.encodeByBase64('isAuthClicked');
        const encodedValue = this.utils.encodeByBase64('true');
    
        if(this.utils.getSessionItem(encodedKey) == encodedValue) {
          return true;
        }
        else{
          this.router.navigate(['/login']);
          return false;
        }
    }
}
