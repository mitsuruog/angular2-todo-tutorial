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

  todos: any;

  constructor() {
    this.todos = [];
  }

  enterTodo($event, newTodo) {
    // Enter Key
    if($event.which === 13) {
      var text = newTodo.value.trim();
      if(text) {
        this.addTodo(text);
        newTodo.value = '';
      }
    }

  }

  addTodo(text) {
    this.todos.push({
      title: text,
      completed: false
    });
  }

}

bootstrap(TodoApp);
