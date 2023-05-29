import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicePaciente } from '../service/service-paciente.service';
import { Paciente } from '../model/paciente.model';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { extractDate } from 'src/app/shared/funtions/date.funtion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  private respuesta: respuesta<Paciente> | any;
  public pacientes: Paciente[] = [];

  constructor(
    private servicePaciente: ServicePaciente,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  convertDateList() {
    this.pacientes.forEach((paciente) => {
      paciente.FechaNacimiento = paciente.FechaNacimiento.split('T')[0];
    });
  }

  eliminar(id: string) {
    this.servicePaciente.deletePaciente(id);
    this.ngOnInit()
    this.ngOnInit()
  }

  cargarDatos() {
    this.servicePaciente.listarPacientes().then((res) => {
      this.respuesta = res;
      this.pacientes = this.respuesta.data;
      this.convertDateList();
    });
  }
}
