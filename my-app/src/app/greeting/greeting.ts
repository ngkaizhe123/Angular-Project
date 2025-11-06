import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  imports: [CommonModule, FormsModule],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  name: string = '';
  message: string = ''; //click action message

  sayHello(){
    if (this.name.trim() === ''){
      this.message = 'Please enter your name first!';
    } else {
      this.message = `Hello, ${this.name}!`; //use `` instead of ''
    }
  }

  clearName(){
    this.name = '';
    this.message = '';
  }
}
