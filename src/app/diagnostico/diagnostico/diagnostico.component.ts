import { Component } from '@angular/core';
import { linkmenu } from 'src/app/shared/model/link.interface';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoComponent {
  public link: linkmenu[] = [
    { path: 'paciente', icon: 'bx bx-child icon', label: 'Paciente' },
    { path: 'diagnostico', icon: 'bx bx-clipboard icon', label: 'Diagnostico' },
  ];
}
