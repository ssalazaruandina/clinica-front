import { Component, OnInit } from '@angular/core';
import { ServicePaciente } from '../service/service-paciente.service';
import { Paciente } from '../model/paciente.model';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { extractDate } from 'src/app/shared/funtions/date.funtion';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit{
  private respuesta: respuesta<Paciente> | any;
  public pacientes: Paciente[] = [];

  constructor(private servicePaciente: ServicePaciente) {  }

  ngOnInit(): void {
    this.servicePaciente.listarPacientes().then((res)=>{
      this.respuesta = res
      this.pacientes = this.respuesta.data
      this.convertDateList()
    });
  }

  convertDateList(){
    this.pacientes.forEach((paciente)=>{
      paciente.FechaNacimiento = paciente.FechaNacimiento.split('T')[0]
    })
  }


}
