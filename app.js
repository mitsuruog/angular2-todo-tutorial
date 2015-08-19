/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoApp = (function () {
    function TodoApp() {
        this.STORAGE_KEY = 'angular2-todo';
        this.todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    }
    TodoApp.prototype.enterTodo = function (newTodo) {
        var text = newTodo.value.trim();
        if (text) {
            this.addTodo(text);
            newTodo.value = '';
        }
    };
    TodoApp.prototype.addTodo = function (text) {
        this.todos.push({
            title: text,
            completed: false
        });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    };
    TodoApp.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    };
    TodoApp.prototype.toggleComplete = function (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
    };
    TodoApp.prototype.getCompletedCount = function () {
        return this.todos.filter(function (todo) { return todo.completed; }).length;
    };
    TodoApp = __decorate([
        angular2_1.Component({
            selector: 'todo-app'
        }),
        angular2_1.View({
            //  template: '<h1>Hello world</h1>'
            templateUrl: 'todo.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoApp);
    return TodoApp;
})();
angular2_1.bootstrap(TodoApp);
