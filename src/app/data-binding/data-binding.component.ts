import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  //types of data binding
  //1. on way data binding (from component to view)
  //a) string interpolation
  username = 'Samuel Ndambuki';
  //b) property binding
  profilepic = 'profile.jpg';
  //c)atrribute,class and style binding
  isDisabled?: true;
  label = 'enter your name';
  isError = true;
  bgcolor = 'blue';
  //2. two way data binding - from view to component
  //a)event binding
  sayHello() {
    alert('Hello!');
  }
}
