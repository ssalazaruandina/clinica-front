import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente/paciente.component';
import { ListarComponent } from './listar/listar.component';
import { ServicePaciente } from './service/service-paciente.service';
import { HttpClientModule } from '@angular/common/http';
import { CrearComponent } from './crear/crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import { DataTablesModule } from 'angular-datatables';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [PacienteComponent, ListarComponent, CrearComponent, EditarComponent, FiltroPipe],
  imports: [
    CommonModule,
    SharedModule,
    PacienteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  exports: [],
  providers: [ServicePaciente],
})
export class PacienteModule {}
