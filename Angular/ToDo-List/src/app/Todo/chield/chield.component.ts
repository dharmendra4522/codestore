import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.css']
})
export class ChieldComponent {

  // Using @Input to receive data from the parent component
  @Input() items: Todo[] = [];
  
  // Dependency injection of TodoService to interact with the backend API
  constructor(private todoService: TodoService) { }


  // send delete request to parent component
  @Output() deleteRequest = new EventEmitter<string>();

  // send complete request to parent component
  @Output() completeRequest = new EventEmitter<string>();

  // send update title request to parent component
  @Output() updateTitleRequest = new EventEmitter<{id: string, title: string}>();

  // Method to emit delete request to parent component
  onDelete(id: string) {
    this.deleteRequest.emit(id);
  }

  onComplete(id: string) {
    this.completeRequest.emit(id);
  }

  onUpdateTitle(id: string, title: string) {
    this.updateTitleRequest.emit({id, title});
  }

}
