import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,SharedModule
  ]
})
export class DoctorModule { }
