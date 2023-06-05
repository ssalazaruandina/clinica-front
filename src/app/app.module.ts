import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteModule } from './paciente/paciente.module';
import { LoginModule } from './login/login.module';
import { DiagnosticoModule } from './diagnostico/diagnostico.module';
import { DoctorModule } from './doctor/doctor.module';

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Modulos creados
    PacienteModule,
    LoginModule,
    DiagnosticoModule,
    DoctorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
