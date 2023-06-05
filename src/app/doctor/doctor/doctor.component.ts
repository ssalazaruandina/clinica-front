import { Component } from '@angular/core';
import { linkmenu } from 'src/app/shared/model/link.interface';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  public link: linkmenu[] = [
    { path: 'doctor', icon: 'bx bxs-capsule', label: 'Doctores' }
  ];
}
