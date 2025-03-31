import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser() {
    return { id: 1, name: 'Alice', email: 'alice@example.com' };
  }
}
