import {Component} from '@angular/core';
import {TodoContentComponent} from './components/content/content.component';
import {TodoHeaderComponent} from './components/header/header.component';
import {TodoFooterComponent} from './components/footer/footer.component';
import {TodoService} from './services/todo.service';
import {Todo} from "./models/todo.model";

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  providers: [TodoService],
  directives: [TodoContentComponent, TodoFooterComponent, TodoHeaderComponent]
})
export class AppComponent {
  todos: Todo[];

  constructor(private service: TodoService) {
    this.todos = this.service.todos;
  }
}
