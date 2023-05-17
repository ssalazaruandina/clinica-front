import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './components/nuevo-paciente/nuevo-paciente.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/lista-pacientes', pathMatch:'full'
  },
  {
    path: 'lista-pacientes', component: ListaPacientesComponent
  },
  {
    path: 'nuevo-paciente', component: NuevoPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
