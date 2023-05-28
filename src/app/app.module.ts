import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Usar Api
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoPacienteComponent } from './components/nuevo-paciente/nuevo-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { PacienteModule } from './paciente/paciente.module';
import { PacienteRoutingModule } from './paciente/paciente-routing.module';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations:[
    AppComponent,
    NuevoPacienteComponent,
    LoginComponent,
    ListaPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    PacienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
