import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router , Event } from '@angular/router';
import { IdleTimerService } from './Service/idle-timer.service';
import { QueryServiceService } from './multi-step-registration/help-desk/service/query-service.service';
import { AuthService } from './Service/auth.service';
import { HelpDeskComponent } from './multi-step-registration/help-desk/help-desk.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'multi-step-form';

  showLoader : boolean = false;

  router = inject(Router);
  http = inject(HttpClient);

  constructor(private idleTimerService: IdleTimerService , private queryService : QueryServiceService,
              private authService : AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((routerEvents : Event)=>{
      if(routerEvents instanceof NavigationStart){
        this.showLoader = true;
      }
      
      if(routerEvents instanceof NavigationEnd || routerEvents instanceof NavigationCancel || routerEvents instanceof NavigationError){
        this.showLoader = false;
      }

    });

    const nowTime = new Date();

    switch(nowTime.getHours()){
      case 0  : if(nowTime.getHours()==0 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 1  : if(nowTime.getHours()==1 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 2  : if(nowTime.getHours()==2 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 3  : if(nowTime.getHours()==3 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 4  : if(nowTime.getHours()==4 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 5  : if(nowTime.getHours()==5 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 6  : if(nowTime.getHours()==6 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 7  : if(nowTime.getHours()==7 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 8  : if(nowTime.getHours()==8 && nowTime.getMinutes()==32){
                    this.queryService.scheduleTaskAtSpecificTime(0, 1);
                }
                break;
      case 9  : if(nowTime.getHours()==9 && nowTime.getMinutes()==0){
                    this.queryService.scheduleTaskAtSpecificTime(0, 30);
                }
                break;
      case 10  :  if(nowTime.getHours()==10 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 11  :  if(nowTime.getHours()==11 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 12  :  if(nowTime.getHours()==12 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 13  :  if(nowTime.getHours()==13 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 14  :  if(nowTime.getHours()==14 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 15  :  if(nowTime.getHours()==15 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 16  :  if(nowTime.getHours()==16 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 17  :  if(nowTime.getHours()==17 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 18  :  if(nowTime.getHours()==18 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 19  :  if(nowTime.getHours()==19 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 20  :  if(nowTime.getHours()==20 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 21  :  if(nowTime.getHours()==21 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 22  :  if(nowTime.getHours()==22 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
      case 23  :  if(nowTime.getHours()==23 && nowTime.getMinutes()==0){
                      this.queryService.scheduleTaskAtSpecificTime(0, 30);
                  }
                  break;
    }

    // this.http.get('http://localhost:2020/user', { withCredentials: true } ).subscribe({
    //   next : (response : any) => {

    //     if(response.authenticated == true) {
    //       //this.authService.setAuthenticatedUser(response.authenticated, response.user.username);
    //       sessionStorage.setItem('isAuthenticated', response.authenticated);
    //       sessionStorage.setItem('username', response.user.username);
    //     }

    //   },

    //   error : (error) => {
    //     console.log(error);
    //   }
    // })
     
  }

  
}
