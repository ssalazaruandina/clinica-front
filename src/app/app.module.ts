import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Usar Api
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { NuevoPacienteComponent } from './components/nuevo-paciente/nuevo-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    NuevoPacienteComponent,
    EditarPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
