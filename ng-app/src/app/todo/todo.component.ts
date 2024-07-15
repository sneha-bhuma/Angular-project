import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
    private list = new TodoList('Sneha', [
      new TodoItem("Go for walk", true),
      new TodoItem("Get Flowers"),
      new TodoItem("Go to office"),
    ]);
    get username(): string {
      return this.list.user;
    }
    get itemCount(): number{
      return this.list.items.filter((item) => !item.complete).length;
    }
}
