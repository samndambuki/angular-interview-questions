// import { ResolveFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Resolve } from '@angular/router';

// export const userResolver: ResolveFn<boolean> = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root',
})

//Resolve - ensures resolver provides data before the route loads
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService) {}
  //returns user data before the route loads
  resolve() {
    return this.userService.getUser();
  }
}
