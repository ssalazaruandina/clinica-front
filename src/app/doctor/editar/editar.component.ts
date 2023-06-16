import { Component, OnInit } from '@angular/core';
import { ServiceDoctor } from '../service/service-doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  id!: string;
  private sub: any;
  private respuesta: respuesta<Doctor> | any;
  public doctor: Doctor = {
    IdMedico: '',
    Nombre: '',
    Apellido: '',
    FechaNacimiento: '',
    Genero: '',
    Direccion: '',
    Ciudad: '',
    Pais: '',
    Telefono: '',
    CorreoElectronico: '',
    Contrasenia: '',
    Especialidad: '',
    NumeroColegiatura: '',
    DescripcionProfecional: '',
  };
  constructor(
    private serviceDoctor: ServiceDoctor,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.recuperarDatos(this.id);
    });
  }

  cancelar(): void {
    this.router.navigate(['doctor']);
  }

  registrar() {
    this.serviceDoctor.actualizarMedico(this.id, this.doctor);
    this.router.navigate(['doctor']);
  }

  recuperarDatos(id: string) {
    this.serviceDoctor.buscarMedico(id).then((res) => {
      this.respuesta = res;
      this.doctor = this.respuesta.data;

      this.doctor.FechaNacimiento = this.doctor.FechaNacimiento.split('T')[0];
    });
  }
}
