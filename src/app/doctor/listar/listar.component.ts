import { Component, OnInit } from '@angular/core';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Doctor } from '../model/doctor.model';
import { ServiceDoctor } from '../service/service-doctor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit{
  private respuesta: respuesta<Doctor> | any;
  public doctores: Doctor[] = [];
  public id: string = '';

  constructor(
    private serviceDoctor: ServiceDoctor,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.serviceDoctor.listarMedicos().then((res) => {
      this.respuesta = res;
      this.doctores = this.respuesta.data;
      this.convertDateList();
    });
  }

  convertDateList() {
    this.doctores.forEach((doctor) => {
      doctor.FechaNacimiento = doctor.FechaNacimiento.split('T')[0];
    });
  }

  eliminar(id: number) {
    this.serviceDoctor.deleteMedico(id);
    this.ngOnInit();
    this.ngOnInit();
  }

  mostrarDetalle(id: number) {}
}
