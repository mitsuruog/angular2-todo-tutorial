import {Component, Input, OnInit} from 'angular2/core';

import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'todo-footer',
  templateUrl: 'app/components/footer.html'
})

export class TodoFooterComponent {
  
  todos: Todo[];
  
  constructor(
    private service: TodoService
  ) {
    this.todos = this.service.todos;
  }
  
  getCompletedCount() {
    return this.service.getComplatedCount();
  }
  
}