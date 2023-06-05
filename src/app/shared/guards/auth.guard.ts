import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn:'root'
})
class userService {
  constructor(private cookieService: CookieService,){  }
  canActivate(): boolean {
    if (this.cookieService.get('accessToken')) {
      return true
    } else {
      return false;
    }
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(userService).canActivate();
};
