import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}
  //rerturns a list of users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }
  //void - the server does not expect to return any data
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
