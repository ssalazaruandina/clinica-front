import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../shared/guards/auth.guard';
import { DoctorComponent } from './doctor/doctor.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { adminGuard, adminGuardChild } from '../shared/guards/admin.guard';

const routes: Routes = [
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate:[adminGuard],
    canActivateChild:[adminGuardChild],
    children: [
      { path: '', component: ListarComponent },
      { path: 'crear', component: CrearComponent },
      { path: 'editar/:id', component: EditarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
