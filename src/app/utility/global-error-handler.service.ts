import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private toastr : ToastrService, private router : Router) { }

  handleError(error: any): void {

    if(error instanceof HttpErrorResponse) {

      if(error.status == 401) {

        this.toastr.warning('You are unauthorized user !!!','Warning' , {timeOut : 2000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        this.router.navigate(['/login']);

      }
      else if(error.status == 403) {

        this.toastr.warning('Session Expired !!!','Warning' , {timeOut : 2000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        this.router.navigate(['/login']);

      } else {

        this.toastr.warning(error.error.message,'Warning' , {timeOut : 2000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
        
      }
    }
  }
}
