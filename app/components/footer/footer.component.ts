import {Component, Input} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'todo-footer',
  templateUrl: 'app/components/footer/footer.html'
})
export class TodoFooterComponent {

  @Input()
  todos:Todo[];

  constructor(private service:TodoService) {
  }

  getCompletedCount() {
    return this.service.getComplatedCount();
  }

}
