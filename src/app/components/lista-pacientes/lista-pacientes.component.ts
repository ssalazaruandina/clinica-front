import { Component,Renderer2 } from '@angular/core';
import { Paciente, respuesta } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/pacientes/paciente.service';
@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent{
  public pacientes:Paciente[] = [];
  constructor(private apiPaciente: PacienteService){
    this.apiPaciente.getPacientes().subscribe(data =>{
      this.pacientes = data.data  
    })
  }
  
  PacienteVacio():Paciente{
    return {
      IdPaciente: "",
      Nombre: "",
      Apellidos: "",
      FechaNacimiento: "",
      Sexo: "",
      Peso: "",
      Altura: "",
      PresionArterial: "",
      FrecuenciaCardiaca: "",
      Temperatura: "",
      Observaciones: ""
    }
  }
  
  pacienteEditar: Paciente = this.PacienteVacio();
  pacienteCopia: Paciente = this.PacienteVacio();
  indice: number = 0;

  
  ngOnInit(): void {}
  
  eliminar(indice:number):void{
    let paciente:Paciente = this.pacientes[indice];
    this.apiPaciente.deletePaciente(paciente.IdPaciente).subscribe(
      () => {
        this.apiPaciente.getPacientes().subscribe(data => {
          this.pacientes= data.data;
        })
    });
  }

  capturarIndice(i:number){
    this.indice = i;
    this.pacienteEditar = this.pacientes[this.indice];
    this.pacienteCopia = this.pacientes[this.indice]
  }

  editar():void{
    this.apiPaciente.putPaciente(this.pacienteEditar.IdPaciente,this.pacienteEditar).subscribe(()=>{
      this.pacientes[this.indice] = this.pacienteEditar;
      this.pacienteEditar = this.PacienteVacio();
      this.apiPaciente.getPacientes().subscribe(data =>{
        this.pacientes = data.data  
      })
    })
  }

  restaurar():void{
    console.log(this.indice)
    console.log(this.pacienteCopia)
    this.pacientes[this.indice] = this.pacienteCopia 
  }
};
