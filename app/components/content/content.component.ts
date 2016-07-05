import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'todo-content',
  templateUrl: 'app/components/content/content.html',
  styleUrls: ['app/components/content/content.css']
})
export class TodoContentComponent {

  todos: Todo[];

  constructor(
    private service: TodoService
  ) {
    this.todos = this.service.todos;
  }

  toggleComplate(todo: Todo) {
    this.service.toggleComplate(todo);
  }

  deleteTodo(todo: Todo) {
    this.service.remove(todo);
  }

}
