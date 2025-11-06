import { Component } from '@angular/core';
import { Greeting } from "./greeting/greeting";

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [Greeting]
})

export class AppComponent { 
    title = 'my-app';
}
