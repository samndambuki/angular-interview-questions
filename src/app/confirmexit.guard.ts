// import { CanDeactivateFn } from '@angular/router';

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

// export const confirmexitGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
//   return true;
// };

// @Injectable({
//   providedIn:'root'
// })

//makes sure the components using the guard have a canDeactivate method
export interface CanComponentDeactivate {
  //this methods decides whether a user can leave a page
  canDeactivate: () => boolean;
}

//this is a route guard that runs when a user tries to navigate away
//works on components that implement CanComponentDEactivate interface
export class ConfirmExitGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
