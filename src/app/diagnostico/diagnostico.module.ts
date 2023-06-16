import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { SharedModule } from '../shared/shared.module';
import { DiagnosticoRoutingModule } from './diagnostico-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    CrearComponent,
    DiagnosticoComponent,
    ListarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DiagnosticoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DiagnosticoModule { }
