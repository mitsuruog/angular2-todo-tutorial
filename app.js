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
        this.todos = [];
    }
    TodoApp.prototype.enterTodo = function ($event, newTodo) {
        // Enter Key
        if ($event.which === 13) {
            var text = newTodo.value.trim();
            if (text) {
                this.addTodo(text);
                newTodo.value = '';
            }
        }
    };
    TodoApp.prototype.addTodo = function (text) {
        this.todos.push({
            title: text,
            isEdit: false,
            completed: false
        });
    };
    TodoApp.prototype.editTodo = function (todo) {
        todo.isEdit = true;
    };
    TodoApp.prototype.editCompleted = function ($event, todo) {
        // Enter Key
        if ($event.which === 13) {
            var target = $event.target;
            todo.title = target.value;
            todo.isEdit = null;
        }
    };
    TodoApp.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    };
    TodoApp.prototype.toggleComplete = function (todo) {
        todo.completed = !todo.completed;
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
