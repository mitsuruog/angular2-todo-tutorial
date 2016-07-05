import {Component} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'todo-header',
  templateUrl: 'app/components/header/header.html'
})
export class TodoHeaderComponent {

  title:string;

  constructor(private service:TodoService) {
  }

  addTodo() {
    if (this.title.trim().length) {
      this.service.add(this.title);
      this.title = null;
    }
  }

}
