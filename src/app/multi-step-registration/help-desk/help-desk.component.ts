import { Component, OnInit, Query } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueryData } from './class/query-data';
import { QueryServiceService } from './service/query-service.service';
import { HttpClient } from '@angular/common/http';
import { ReplyData } from './class/reply-data';
import { AuthService } from 'src/app/Service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from 'src/app/utility/global-error-handler.service';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Component({
  selector: 'app-help-desk',
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.css']
})
export class HelpDeskComponent implements OnInit {

    constructor(private service : QueryServiceService,private http : HttpClient , private authService : AuthService , 
        private toastr : ToastrService , private router : Router, private errorHandler : GlobalErrorHandlerService,
        private utils : SecureStorageUtilService
    ){}

    username : any;

    ngOnInit(): void {
      this.getAllQuery();
      this.username = this.utils.getItem('username');
    }

    addRequestVar : String = "hidden";

    addRequestColor : String = "";
    addRequestFont : String = "";

    showLoader : boolean = false;

    addRequest() : void {
        this.addRequestVar = "inline";
        this.viewRequestVar = "hidden";

        this.addRequestColor = "text-orange-400";
        this.addRequestFont = "font-bold";

        this.viewRequestColor = "";
        this.viewRequestFont = "";
    }

    viewRequestVar : String = "inline";

    viewRequestColor : String = "text-orange-400";
    viewRequestFont : String = "font-bold";

    viewRequest() : void {
        this.viewRequestVar = "inline";
        this.addRequestVar = "hidden";

        this.viewRequestColor = "text-orange-400";
        this.viewRequestFont = "font-bold";

        this.addRequestColor = "";
        this.addRequestFont = "";

        this.successMessage = "";
        this.errorMessage = "";

        this.getAllQuery();
    }


    cancelRequest(queryform : NgForm) : void{
        this.viewRequest();
        queryform.reset();
    }


    queryData = new QueryData();

    errorMessage : String = "";
    successMessage : String = "";


    registerQueryForm(queryForm : NgForm) : void{

        this.showLoader = true;
        let responseData = "";

        if(this.queryData.category!=null && this.queryData.description!=null){

            this.queryData.userId = this.username;

            this.service.registerQueryData(this.queryData).subscribe({
                next : (response : any) => {
                    responseData = response.query;
                    //this.successMessage = "Query Saved Successfully !!!";
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
  
                        queryForm.reset();
                    }, 2000);
                }
            });
        }
    }


    query : any = [];

    getAllQuery() : void {

        this.showLoader = true;
        let username : any = this.utils.getItem('username');
        let responseData : any ;

        this.service.getAllQueryData(username).subscribe({
            next : (response : any)=>{
                responseData = response.allQuery;
            },
            error : (error)=>{
                this.showLoader = false;
                this.errorHandler.handleError(error);
            },
            complete : () => {
                setTimeout( ()=> {
                    this.showLoader = false;
                    this.query = responseData;
                });
            }
        });
    }

    count : number = 0;

    increaseCount() : void {
        this.count++;
        console.log(this.count);
    }
}
