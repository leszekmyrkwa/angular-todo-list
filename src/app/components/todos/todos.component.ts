import { Component, OnInit } from '@angular/core';
import  { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  projects = JSON.parse(localStorage.getItem('projects'));

  title: string;
  todos: Todo[];
  inputTodo: string = '';
  currentProject: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.todos = this.projects[this.currentProject].todos;
    this.title = this.projects[this.currentProject].title;
  }

  toggleDone(index: number) {
    this.todos.map((v , i) => {
      if (i === index) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(index: number) {
    this.todos = this.todos.filter((v, i) => i !== index);
    this.projects[this.currentProject].todos.splice(index, 1);
  }

  addTodo() {
    if (this.inputTodo != '') {
      this.projects[this.currentProject].todos.push(
        {
          content: this.inputTodo,
          completed: false
        }
      )
    }
  }

  changeContent(buttonIndex) {
    this.currentProject = buttonIndex;
    this.todos = this.projects[this.currentProject].todos;
    this.title = this.projects[this.currentProject].title;
  }

  saveChanges(){
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}
