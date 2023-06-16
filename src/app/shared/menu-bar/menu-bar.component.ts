import { Component, Input } from '@angular/core';
import { linkmenu } from '../model/link.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  nombre: string = 'EsSalud';

  constructor(private cookieService: CookieService, private router: Router) {}

  @Input('menu-links') menu!: linkmenu[];


  cerrarsesion() {
    
    this.cookieService.delete('Is');
    this.cookieService.delete('accessToken');
    this.router.navigate(['login']);
  }
}
