// import { CanActivateChildFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

// export const adminGuard: CanActivateChildFn = (childRoute, state) => {
//   return true;
// };
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivateChild {
  canActivateChild(): boolean {
    const isAdmin = false;
    if (!isAdmin) {
      console.log('access denied, not an admin');
      return false;
    }
    return true;
  }
}
