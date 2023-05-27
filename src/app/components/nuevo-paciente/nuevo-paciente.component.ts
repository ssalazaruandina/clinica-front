import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Form} from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/pacientes/paciente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit{
  public pacientes:Paciente[] = [];
  constructor(private forBuilder: FormBuilder, private apiPaciente: PacienteService,private router:Router){
  }
  ngOnInit(): void {
    this.formPaciente = this.forBuilder.group({
   // IdPaciente: ["",[Validators.required]],
    Nombre: ["",[Validators.required]],
    Apellidos: ["",[Validators.required]],
    FechaNacimiento: ["",[Validators.required]],
    Sexo: ["",[Validators.required]],
    Peso: ["",[Validators.required]],
    Altura: ["",[Validators.required]],
    PresionArterial: ["",[Validators.required]],
    FrecuenciaCardiaca: ["",[Validators.required]],
    Temperatura: ["",[Validators.required]],
    Observaciones: ["",[Validators.required]]
    })
  }
  public formPaciente: FormGroup = new FormGroup({
    //IdPaciente: new FormControl(''),
    Nombre: new FormControl(''),
    Apellidos: new FormControl(''),
    FechaNacimiento: new FormControl(''),
    Sexo: new FormControl(''),
    Peso: new FormControl(''),
    Altura: new FormControl(''),
    PresionArterial: new FormControl(''),
    FrecuenciaCardiaca: new FormControl(''),
    Temperatura: new FormControl(''),
    Observaciones: new FormControl('')
  })
  
  registrar():void{
    if(
      this.formPaciente.controls['Nombre'].errors?.['required'] 
    || this.formPaciente.controls['Apellidos'].errors?.['required']
    || this.formPaciente.controls['FechaNacimiento'].errors?.['required']
    || this.formPaciente.controls['sexo'].errors?.['required']
    || this.formPaciente.controls['Peso'].errors?.['required']
    || this.formPaciente.controls['Altura'].errors?.['required']
    || this.formPaciente.controls['PresionArterial'].errors?.['required']
    || this.formPaciente.controls['FrecuenciaCardiaca'].errors?.['required']
    || this.formPaciente.controls['Temperatura'].errors?.['required']
    || this.formPaciente.controls['Observaciones'].errors?.['required'] 
     ){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ingrese Todos Los Datos',
        showConfirmButton: false,
        timer: 1500

      })
    }
    this.apiPaciente.postPaciente(this.formPaciente.value).subscribe(
      (mensaje) => {
        this.pacientes.push(this.formPaciente.value)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro Exitoso',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['lista-pacientes']);
    });
  }
}
