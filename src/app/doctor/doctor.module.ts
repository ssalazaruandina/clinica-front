import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';

@NgModule({
  declarations: [DoctorComponent,ListarComponent,CrearComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DoctorModule {}
