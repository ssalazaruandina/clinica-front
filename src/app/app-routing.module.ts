import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './components/nuevo-paciente/nuevo-paciente.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/lista-pacientes', pathMatch:'full'
  },
  {
    path: 'lista-pacientes', component: ListaPacientesComponent
  },
  {
    path: 'nuevo-paciente', component: NuevoPacienteComponent
  },
  {
    path: 'editar-paciente', component: EditarPacienteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
