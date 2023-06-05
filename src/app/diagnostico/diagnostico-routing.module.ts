import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { MenuBarComponent } from '../shared/menu-bar/menu-bar.component';
import { CrearComponent } from './crear/crear.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'diagnostico',
    component: DiagnosticoComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: ListarComponent },
      { path: 'crear/:id', component: CrearComponent },
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
export class DiagnosticoRoutingModule {}
