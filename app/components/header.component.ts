import {Component, OnInit} from 'angular2/core';

import {Todo} from '../models/todo.model';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'todo-header',
  templateUrl: 'app/components/header.html'
})

export class TodoHeaderComponent {
  
  title: string;
  
  constructor(
    private service: TodoService
  ) {}
  
  addTodo() {
    if(this.title.trim().length) {
      this.service.add(this.title);
      this.title = null;
    }  
  }
  
}