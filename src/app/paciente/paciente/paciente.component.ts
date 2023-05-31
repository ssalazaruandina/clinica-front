import { Component, OnInit } from '@angular/core';
import { linkmenu } from 'src/app/shared/model/link.interface';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  public link: linkmenu[] = [
    { path: 'paciente', icon: 'bx bx-child icon', label: 'Paciente' },
    { path: 'diagnostico', icon: 'bx bx-clipboard icon', label: 'Diagnostico' },
  ];
}
