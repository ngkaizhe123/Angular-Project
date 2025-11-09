import { Component } from '@angular/core';
import { Greeting } from "./greeting/greeting";
import { Todo } from "./todo/todo";

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [Greeting, Todo]
})

export class AppComponent { 
    title = 'my-app';
}
