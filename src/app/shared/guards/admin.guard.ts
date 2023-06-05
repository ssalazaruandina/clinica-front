import { Injectable, inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
class userService {
  constructor(private cookieService: CookieService) {}
  canActivate(): boolean {
    if (this.cookieService.get('Is')) {
      return true;
    } else {
      return false;
    }
  }
}

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(userService).canActivate();
};

export const adminGuardChild: CanActivateChildFn = (route, state) => {
  return inject(userService).canActivate();
};
