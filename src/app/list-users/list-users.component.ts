import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private apiService: ApiService, private http: HttpClient) {}
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.apiService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  addUser() {
    const newUser: User = {
      id: 0,
      name: 'new user',
      email: 'mewuser@gmail,com',
      age: 24,
    };
    this.apiService.addUser(newUser).subscribe(() => {
      this.loadUsers();
    });
  }
}
