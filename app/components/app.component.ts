import {Component, OnInit} from 'angular2/core';

import {TodoContentComponent} from '../components/content.component';
import {TodoHeaderComponent} from '../components/header.component';
import {TodoFooterComponent} from '../components/footer.component';
import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app.html',
  providers: [TodoService],
  directives: [TodoContentComponent, TodoFooterComponent, TodoHeaderComponent]
})

export class AppComponent { }