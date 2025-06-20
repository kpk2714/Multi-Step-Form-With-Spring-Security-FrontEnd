import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecureStorageUtilService } from '../utility/secure-storage-util.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-one',
  templateUrl: './nav-one.component.html',
  styleUrls: ['./nav-one.component.css']
})
export class NavOneComponent implements OnInit {

  constructor(private http : HttpClient , private router : Router, 
              private utils : SecureStorageUtilService, private errorHandler : ErrorHandler,
              private toastr : ToastrService
  ){}

  name : string = '';

  ngOnInit(){
    this.http.get('http://localhost:2020/getName/userId='+this.utils.getItem('username'), {withCredentials : true}).subscribe({
      next : (response : any)=>{
        this.name = response.name;
      },
      error : (error)=>{
        this.errorHandler.handleError(error);
      }
    });
  }

  showModal: boolean = false;

  openModal(): void {
    this.showModal = true;
  }

  onConfirm(result: boolean): void {
    this.showModal = false;
    if (result) {
      this.router.navigate(['/login'],{queryParams : {logout : true}});

      this.utils.deleteItem('username');
      this.utils.deleteItem('isAuthenticated');
      this.utils.deleteItem('remember-me');

      this.utils.removeItem('username');

      this.logout();
    }
  }

  logout() {
    this.http.get('http://localhost:2020/user/logout', { withCredentials: true }).subscribe({
      next: (response : any) => {
        // Clear sessionStorage/localStorage
        sessionStorage.clear();
        localStorage.clear();

        // Handle Response
        this.toastr.success(response.logout,'Success' , {timeOut : 1000 , positionClass : 'toast-top-center' , progressBar : true , closeButton : true});
      },
      error: (error) => {
        this.errorHandler.handleError(error);
      }
    });
  }
}
