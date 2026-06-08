import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  courseName: string = "Angular";

  inputType = "radio";
  rollNo: number = 101;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myClassName: string = "background-color: cyan; color: red; font-size: 20px; padding: 10px; border-radius: 5px;";
  myclassName2: string = "my-box";
  constructor() {

  }

  showAlert(message: string) {
    alert(message);
  }
  showMessage(){
    alert("Welcome to Angular Data Binding");
  }


  // Two way data binding
  changeCourseName(){
    this.courseName = "NextJs";
  }

  stateName: string = "Madhya Pradesh";
}
