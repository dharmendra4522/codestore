import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.css']
})
export class NgcontainerComponent {
  pDiv: string= "pDiv";

  isConditionTrue: boolean = true;
  http = inject(HttpClient);
  userList: any[] = [];
  isApi : boolean = false;
  
  getUser(){
    this.isApi = true;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      this.userList = res;
      this.isApi = false;
    });
  }
}
