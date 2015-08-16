/// <reference path="typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
  selector: 'todo-app'
})

@View({
  template: '<h1>Hello world</h1>'
})

class TodoApp {}

bootstrap(TodoApp);
