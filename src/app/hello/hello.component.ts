import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-hello',
  imports: [HighlightDirective],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})

//component - controls UI of an element
export class HelloComponent {}
