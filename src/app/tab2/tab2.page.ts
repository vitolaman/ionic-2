import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  angka : number;
  random : number;
  tebak : boolean;
  buttonTitle:string = "Hide"; 
  constructor() {
    this.random = this.RandomAngka();
    console.log(this.random);
  }

  RandomAngka(){
    return Math.floor(Math.random() * Math.floor(10))
  }

  Cek(){
 
    if(this.angka == this.random){
      this.tebak = true;
    } else{
      this.tebak = false;
      alert("Salah!");
    }
  }
}
