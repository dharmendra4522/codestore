import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name="Dharm";
  constructor(){
    console.log("constructor");
  }
  ngOnInit(){
    console.log("ngOnInit");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
  
  onUserBtnClick(data: any){
    console.log("User button clicked!", data);
  }
}
