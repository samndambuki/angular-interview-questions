import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterLink],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css',
})
export class RoutingComponent {
  constructor(private router: Router) {}
  gotToDirectives() {
    this.router.navigate(['directives']);
  }
}
