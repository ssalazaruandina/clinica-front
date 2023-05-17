import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { PacienteService } from 'src/app/services/pacientes/paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {
  //id:string | null
  constructor(private forBuilder: FormBuilder, private apiPaciente: PacienteService,private router:Router,private aRoute:ActivatedRoute){
    //this.id = this.aRoute.snapshot.paramMap.get('IdPaciente');
  }

  ngOnInit(): void {
    this.formPacientes = this.forBuilder.group({
    IdPaciente: ["",[Validators.required]],
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
  
  public formPacientes: FormGroup = new FormGroup({
    IdPaciente: new FormControl(''),
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
}
