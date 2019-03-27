import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot
} from '@angular/router';
import { TwoPage } from './two.page';

@Injectable()
export class CanDeactivateTwo implements CanDeactivate<TwoPage> {
  public async canDeactivate(component: TwoPage,
                             currentRoute: ActivatedRouteSnapshot,
                             currentState: RouterStateSnapshot,
                             nextState: RouterStateSnapshot): Promise<boolean> {
    return false;
  }
}
