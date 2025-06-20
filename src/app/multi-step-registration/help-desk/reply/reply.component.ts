import { Component, ErrorHandler, OnInit } from '@angular/core';
import { QueryData } from '../class/query-data';
import { ReplyData } from '../class/reply-data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from 'src/app/Service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SecureStorageUtilService } from 'src/app/utility/secure-storage-util.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  constructor(private http : HttpClient , private authService : AuthService , 
              private toastr : ToastrService , private router : Router,
              private utils : SecureStorageUtilService, private errorHandler : ErrorHandler)
              {}

  query!: QueryData;
  username: any;

  ngOnInit(): void {
    this.query = history.state;
    this.username = this.utils.getItem('username');
    this.getReply();
  }

  viewRequestVar : String = "inline";

    viewRequestColor : String = "text-orange-400";
    viewRequestFont : String = "font-bold";

    viewRequest() : void {
        this.viewRequestVar = "inline";
        this.viewRequestColor = "text-orange-400";
        this.viewRequestFont = "font-bold";
    }

    count : number = 0;

    increaseCount() : void {
        this.count++;
        console.log(this.count);
    }

    reply!: any;

    getReply(){

      const params = new HttpParams().set('userId',this.username);

        this.http.get('http://localhost:2020/getReply/requestId='+this.query.id,{params : params, withCredentials : true}).subscribe({
          next : (response : any)=>{
            this.reply = response.reply;
          },
          error : (error)=>{
            this.errorHandler.handleError(error);
          }
        });
    }
}
