import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status, Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:3000/todos";

  // Method to fetch todos from the backend API
  getTodos() {
    return this.http.get(this.apiUrl);
  }

  // Method to add a new todo to the backend API
  addTodo(title: string, status: Status) {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID
      title: title,
      status: status
    }
    return this.http.post(this.apiUrl, newTodo);
  }


  // Method to delete a todo from the backend API
  deleteTodo(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  // Method to update a todo's status in the backend API
  completeTodo(id: string, updateStatus: Status) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, { status: updateStatus });
  }

  
  updateTitle(id: string, title: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, { title: title });
  }

}
