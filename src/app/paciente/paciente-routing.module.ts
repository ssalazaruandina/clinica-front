import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { ListarComponent } from './listar/listar.component';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {
    path: 'paciente',
    component: PacienteComponent,
    children: [
      { path: '', component: ListarComponent },
      { path: 'crear', component: CrearComponent },
    ],
  },
  {
    path: 'prueba',
    component: MenuBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PacienteRoutingModule {}
