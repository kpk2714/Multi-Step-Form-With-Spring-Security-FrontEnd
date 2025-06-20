import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-nav',
  templateUrl: './candidate-nav.component.html',
  styleUrls: ['./candidate-nav.component.css']
})
export class CandidateNavComponent implements OnInit{

      constructor(private router : Router){}

      routeVar : any;

      ngOnInit(): void {
        const routString = this.router.url.split('/');
        this.routeVar = routString[routString.length-1];
      }

      navigateToPer() : void {
          this.router.navigate(['student/pages/candidate-register/personal-details']);
      }

      navigateToEdu() : void {
        this.router.navigate(['student/pages/candidate-register/education-details']);
      }

      navigateToFam() : void {
        this.router.navigate(['student/pages/candidate-register/family-details']);
      }

      navigateToWork() : void {
        this.router.navigate(['student/pages/candidate-register/work-experience']);
      }

      navigateToTech() : void {
        this.router.navigate(['student/pages/candidate-register/technical-skills']);
      }

      navigateToLan() : void {
        this.router.navigate(['student/pages/candidate-register/languages-known']);
      }

      navigateToDoc() : void {
        this.router.navigate(['student/pages/candidate-register/documents-upload']);
      }

      navigateToDec() : void {
        this.router.navigate(['student/pages/candidate-register/declarations']);
      }
}
