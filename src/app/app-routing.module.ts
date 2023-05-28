import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPacienteComponent } from './components/nuevo-paciente/nuevo-paciente.component';
import { LoginComponent} from './components/login/login.component';
import { PacienteModule } from './paciente/paciente.module';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'nuevo-paciente', component: NuevoPacienteComponent
  },
  {
    path: 'lista-pacientes', component: ListaPacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
