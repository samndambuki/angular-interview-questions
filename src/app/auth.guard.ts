// import { CanActivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //inject router service to enable navigation
  constructor(private router: Router) {}
  //retuns true - allow access, false(deny access)
  //blocks or allows navigation to a route
  canActivate(): boolean {
    const isAuthenticated = true;
    if (!isAuthenticated) {
      this.router.navigate(['login']);
      //prevents navigation to protected route
      return false;
    }
    //if authenticated
    return true;
  }
}
