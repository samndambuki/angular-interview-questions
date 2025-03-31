import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userId: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    //get the id parameter
    this.userId = this.route.snapshot.paramMap.get('id');
    // console.log(this.userId);
  }
}
