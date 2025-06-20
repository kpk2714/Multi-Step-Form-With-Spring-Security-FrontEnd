import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-two',
  templateUrl: './nav-two.component.html',
  styleUrls: ['./nav-two.component.css']
})
export class NavTwoComponent implements OnInit{

      constructor(private router : Router){}

      routeVar : any;
      candidateVar : any;

      ngOnInit(): void {
        const routeString = this.router.url.split('/');
        this.routeVar = routeString[routeString.length-1];
        this.candidateVar = routeString[routeString.length-2];
      }

      textColorHo : String = "";
      bgColorHo : String = "";

      textColorCa : String = "";
      bgColorCa : String = "";

      textColorHe : String = "";
      bgColorHe : String = "";

      changeStyleHo() {

        this.textColorHo = "text-orange-400";
        this.bgColorHo = "bg-red-50";

        this.textColorCa = "";
        this.bgColorCa = "";

        this.textColorHe = "";
        this.bgColorHe = "";

        
      }

      changeStyleCa() : void {

        
        
          this.textColorHo = "";
          this.bgColorHo = "";

          this.textColorCa = "text-orange-400";
          this.bgColorCa = "bg-red-50";

          this.textColorHe = "";
          this.bgColorHe = "";

          
    }

    changeStyleHe() : void {
          this.textColorHo = "";
          this.bgColorHo = "";

          this.textColorCa = "";
          this.bgColorCa = "";

          this.textColorHe = "text-orange-400";
          this.bgColorHe = "bg-red-50";

          
  }

  navigateToHome() : void {
    this.router.navigate(['student/pages/home']);
  }

  navigateToRegistration() : void {
    this.router.navigate(['student/pages/candidate-register/personal-details']);
  }

  navigateToHelpdesk() : void {
    this.router.navigate(['student/pages/helpdesk']);
  }
}
