import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiceDoctor } from '../service/service-doctor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  constructor(
    private forBuilder: FormBuilder,
    private apiDoctor: ServiceDoctor,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formDoctor = this.forBuilder.group({
      Nombre: ['', [Validators.required]],
      Apellido: ['', [Validators.required]],
      FechaNacimiento: ['', [Validators.required]],
      Genero: ['', [Validators.required]],
      Direccion: ['', [Validators.required]],
      Ciudad: ['', [Validators.required]],
      Pais: ['', [Validators.required]],
      Telefono: ['', [Validators.required]],
      CorreoElectronico: ['', [Validators.required]],
      Especialidad: ['', [Validators.required]],
      NumeroColegiatura: ['', [Validators.required]],
      DescripcionProfecional: ['', [Validators.required]],
    });
  }

  public formDoctor: FormGroup = new FormGroup({
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    FechaNacimiento: new FormControl(''),
    Genero: new FormControl(''),
    Direccion: new FormControl(''),
    Ciudad: new FormControl(''),
    Pais: new FormControl(''),
    Telefono: new FormControl(''),
    CorreoElectronico: new FormControl(''),
    Especialidad: new FormControl(''),
    NumeroColegiatura: new FormControl(''),
    DescripcionProfecional: new FormControl(''),
  });

  public cancelar(): void {
    this.router.navigate(['doctor']);
  }

  public registrar():void{
    console.log(this.formDoctor.value)
    if (
      this.formDoctor.controls['Nombre'].errors?.['required'] ||
      this.formDoctor.controls['Apellidos'].errors?.['required'] ||
      this.formDoctor.controls['FechaNacimiento'].errors?.['required'] ||
      this.formDoctor.controls['Sexo'].errors?.['required'] ||
      this.formDoctor.controls['Peso'].errors?.['required'] ||
      this.formDoctor.controls['Altura'].errors?.['required'] ||
      this.formDoctor.controls['PresionArterial'].errors?.['required'] ||
      this.formDoctor.controls['FrecuenciaCardiaca'].errors?.['required'] ||
      this.formDoctor.controls['Temperatura'].errors?.['required'] ||
      this.formDoctor.controls['Observaciones'].errors?.['required']
    ) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ingrese Todos Los Datos',
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
    } */
    console.log(this.formDoctor.value);
    
    this.apiDoctor.crearMedico(this.formDoctor.value).then(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['doctor']);
    });
  }
}
