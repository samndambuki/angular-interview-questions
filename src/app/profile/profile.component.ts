import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  //ActivatedRoute to access route data
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe((data) => console.log(data['user']));
  }
}
