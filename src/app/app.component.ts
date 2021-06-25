import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-to-do-list';
  projects =
    [{
      title: 'Project1',
      id: 1,
      todos: [
        {
          content: 'Buy book',
          completed: true
        },
        {
          content: 'Buy bread',
          completed: false
        }
      ]
    },{
      title: 'Project2',
      id: 2,
      todos: [
        {
          content: 'Go to work',
          completed: false
        },
        {
          content: 'Buy bread',
          completed: false
        }
      ]
    },{
      title: 'Project3',
      id: 3,
      todos: [
        {
          content: 'Walk dog',
          completed: true
        },
        {
          content: 'Go gym',
          completed: false
        }
      ]
    }];

  constructor() {
    this.saveProjects();
  }

  saveProjects() {
    if (localStorage.getItem('projects') === null) {
      localStorage.setItem('projects', JSON.stringify(this.projects));
    }
  }
}
