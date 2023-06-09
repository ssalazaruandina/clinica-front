import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { ListarComponent } from './listar/listar.component';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'paciente',
    component: PacienteComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: ListarComponent },
      { path: 'crear', component: CrearComponent },
      { path: 'editar/:id', component: EditarComponent },
    ]
  },
  {
    path: 'prueba',
    component: ListarComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PacienteRoutingModule {}
