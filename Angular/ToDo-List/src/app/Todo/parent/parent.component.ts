import { Component, OnInit } from '@angular/core';
import { Status, Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  todoList: Todo[] = [];
  newTaskTitle: string = '';
  newTaskStatus: Status = Status.pending;

  StatusEnum = Status;

  isEditing: boolean = false;
  editTodoId = "";

  // Dependency injection of TodoService to interact with the backend API
  constructor(private todoService: TodoService) { }

  // On component initialization, fetch the list of todos from the backend API
  ngOnInit() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todoList = data as Todo[];
    });
  }
  
  // Method to add a new todo to the list and backend API
  addTodo() {
    if (this.newTaskTitle.trim().length === 0) {
      alert('Please enter a task title.');
      return;
    }
    this.todoService.addTodo(this.newTaskTitle, this.newTaskStatus).subscribe({
      next: (newTodo: any) => {
        if (newTodo) {
          console.log('Added new todo:', newTodo);
          this.todoList.push(newTodo as Todo);
          this.newTaskTitle = '';
          this.newTaskStatus = Status.pending;
        }
      },
      error: (error) => {
        console.error('Error adding todo:', error);
      }
    });
  }

  // Method to update a todo's title in the list and backend API
  updateTitle(id: string, title: string) {
    this.todoService.updateTitle(id, title).subscribe({
      next: (updatedTodo) => {
        const todo = this.todoList.find(t => t.id === id);
        if (todo) {
          todo.title = title;
        }
      },
      error: (err) => console.error('Failed to update title:', err)
    });
  }

  handleTaskAction() {
    if (this.newTaskTitle.trim().length === 0) {
      alert('Please enter a task title.');
      return;
    }
    if (this.isEditing) {
      this.updateTitle(this.editTodoId, this.newTaskTitle);
      this.resetFormState();
    } else {
      this.addTodo();
    }
  };

  // reset form state after update or add, because both add and update operations use the same form
  private resetFormState() {
    this.newTaskTitle = '';
    this.newTaskStatus = Status.pending;
    this.isEditing = false;
    this.editTodoId = "";
  }
  // load the existing title in form and prepare for update

  prepareEdit(id: string, currTitle: string) {
    this.newTaskTitle = currTitle;
    this.isEditing = true;
    this.editTodoId = id;
  }

  // Method to delete a todo from the list and backend API
  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todoList = this.todoList.filter(todo => todo.id !== id);
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
      }
    });
  }

  // Method to update a todo's status in the list and backend API
  completeTodo(id: string) {
    this.todoService.completeTodo(id, Status.complete).subscribe({
      next: (updatedTodo) => {
        const todo = this.todoList.find(t => t.id === id);
        if (todo) {
          todo.status = Status.complete;
        }
      },
      error: (err) => console.error('Failed to update status:', err)
    });
  }

}
