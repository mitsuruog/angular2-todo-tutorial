/// <reference path="typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'todo-app'
})

@View({
//  template: '<h1>Hello world</h1>'
  templateUrl: 'todo.html',
  directives: [NgFor]
})

class TodoApp {

  STORAGE_KEY: String;
  todos: any;
  
  constructor() {
    this.STORAGE_KEY = 'angular2-todo';
    this.todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
  }

  enterTodo(newTodo) {
    var text = newTodo.value.trim();
    if(text) {
      this.addTodo(text);
      newTodo.value = '';
    }
  }

  addTodo(text) {
    this.todos.push({
      title: text,
      completed: false
    });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
  }

  deleteTodo(todo) {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
  }

  toggleComplete(todo) {
    todo.completed = !todo.completed;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
  }
  
  getCompletedCount() {
    return this.todos.filter(todo => todo.completed).length
  }

}

bootstrap(TodoApp);
