import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  imports: [CommonModule],
  templateUrl: './conditional-rendering.component.html',
  styleUrl: './conditional-rendering.component.css',
})
export class ConditionalRenderingComponent {
  isVisible = true;
  status = 'default';
}
