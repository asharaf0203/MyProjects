import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

   // Calls the canDeactivate function from the component being navigated away from.
   // Used to check for unsaved changes on a component to ensure unsaved changes are not lost
   // Needs to be on the component itself in order to get access to the forms to check for unsaved changes
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
