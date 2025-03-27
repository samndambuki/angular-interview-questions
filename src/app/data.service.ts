import { Injectable } from '@angular/core';

@Injectable({
  //makes the service available throughout the app
  providedIn: 'root',
})
export class DataService {
  private message = 'Hello from data service';
  getMessage() {
    return this.message;
  }
}
