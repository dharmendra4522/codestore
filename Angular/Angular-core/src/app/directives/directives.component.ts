import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  id: number;
}
interface CourseCategory {
  categoryName: string;
  topics: string[];
}
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  products: Product[] = [
    { name: 'Laptop', id: 1 },
    { name: 'Smartphone', id: 2 },
    { name: 'Tablet', id: 3 }
  ];

  trackByProductId(index: number, product: Product) {
    return product.id;
  }

  // Using signal to manage the login state and user list
  isLogin = signal(true);
  // Using signal to manage a list of users
  users = signal([
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
  ]);
  studentData = [{
    name: "Dharmendra",
    age: 23,
    email: "dharm@gmail.com"
  },
  {
    name: "sam",
    age: 20,
    email: "sam@gmail.com"
  },
  {
    name: "Piter",
    age: 20,
    email: "piter@gmail.com"
  },
  {
    name: "John",
    age: 25,
    email: "john@gmail.com"
  },
  ]

  pColor = "red";

  // A multi-layered array of objects
  develomentRoadMap: CourseCategory[] = [
    {
      categoryName: 'Frontend',
      topics: ['Html', 'Css', 'JavaScript', 'Angular', 'React']
    },
    {
      categoryName: 'Backend',
      topics: ['Node.js', 'Express', 'Django', 'Flask']
    },
    {
      categoryName: 'Database',
      topics: ['MySQL', 'MongoDB', 'PostgreSQL']
    }
  ];

  // *ngIf Direvtive
  login = true;

  toggleLogin(){
    this.login = !this.login;
  }
  
  // multiple ngIf
  block = 0;
  updateBlock(){
    this.block = this.block === 0 ? 1 : 2;
  }

  // ngSwitch : it is used to display one of many possible elements based on the value of an expression.

  color: string = '';

  changeColor(newColor: string){
    this.color = newColor;
  }

  // ngstyle
  style = "50px";

  // ngClass
  multiClass = {
    'class1': false,
    'class2': true,
    'class3': false
  }

  manyStyle = {
    'color': 'blue',
    'font-size': '20px',
    'border': '1px solid black'
  }
}
