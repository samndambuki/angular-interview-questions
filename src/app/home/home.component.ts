import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  goToUser() {
    this.router.navigate(['/user', 123]);
  }
  goToProducts() {
    this.router.navigate(['/products'], {
      queryParams: { category: 'electronics' },
    });
  }
}
