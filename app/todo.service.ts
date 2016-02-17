import {Injectable} from 'angular2/core';
import {Todo} from './todo.model';

const STORAGE_KEY = 'angular2-todo';

@Injectable()
export class TodoService {

  todos: Todo[] = [];
  editTodo: Todo = null;
  
  getAll(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve, reject) => {
      this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      resolve(this.todos);
    });
  }

  add() {
    this.todos.push(this.editTodo);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    this.editTodo = null;
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));    
  }

  toggleComplate(todo: Todo) {
    this.todos.filter(todo => todo.id === todo.id)
      .map(todo => todo.isCompleted === !!!todo.isCompleted);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));        
  }

  getComplatedCount(): Promise<number> {
    return this.getAll().then(todos =>
      todos.filter(todo => todo.isCompleted).length);
  }

}