import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  width : number = 0;

  constructor() { }

  setMessage(data:any){
    this.width = this.width + data;
  }

  getMessage(){
    return this.width;
  }
}
