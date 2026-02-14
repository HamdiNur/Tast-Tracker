import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Tasks } from './component/tasks/tasks';
@Component({
  selector: 'app-root',
  imports: [Header,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task Tracker');
}
