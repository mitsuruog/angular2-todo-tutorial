import {Injectable} from "@angular/core";
import {Todo} from "../models/todo.model";

const STORAGE_KEY = 'angular2-todo';

@Injectable()
export class TodoService {

  todos:Todo[];

  constructor() {
    const persistedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    this.todos = persistedTodos.map(todo => {
      return new Todo(
        todo.id,
        todo.title,
        todo.isCompleted
      );
    });
  }

  add(title:string) {
    let newTodo = new Todo(
      this.todos.length + 1,
      title,
      false
    );
    this.todos.push(newTodo);
    this.save();
  }

  remove(todo:Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.save();
  }

  toggleComplate(todo:Todo) {
    this.todos.filter(t => t.id === todo.id)
      .map(t => t.isCompleted = !t.isCompleted);
    this.save();
  }

  getComplatedCount():number {
    // TODO newTodoのInputがchangeするたびに呼び出されている
    return this.todos.filter(todo => todo.isCompleted).length;
  }

  private save() {
    console.log('saving : ', this.todos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
  }

}
