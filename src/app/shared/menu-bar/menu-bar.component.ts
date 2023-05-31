import { Component, Input } from '@angular/core';
import { linkmenu } from '../model/link.interface';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  nombre:string = "EsSalud"

  @Input('menu-links') menu!:linkmenu[];
}
