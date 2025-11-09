import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})

export class Todo {
  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim() === '') return;
    this.tasks.push(this.newTask.trim());
    this.newTask = '';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
