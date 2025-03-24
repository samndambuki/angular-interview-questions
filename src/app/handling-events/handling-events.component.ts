import { Component } from '@angular/core';

@Component({
  selector: 'app-handling-events',
  imports: [],
  templateUrl: './handling-events.component.html',
  styleUrl: './handling-events.component.css',
})
export class HandlingEventsComponent {
  handleClick() {
    console.log('button clicked');
  }
  sayHello(name: string) {
    console.log(`Hello ${name}`);
  }
}
