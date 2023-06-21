import { Component, OnInit } from '@angular/core';
import {
  respuesta,
  respuestaDataModal,
} from 'src/app/shared/interface/response.inteface';
import { Doctor } from '../model/doctor.model';
import { ServiceDoctor } from '../service/service-doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  private respuesta: respuesta<Doctor> | any;
  public doctores: Doctor[] = [];
  public id: string = '';
  public dataDoctor!: Doctor;
  
  public page: number = 0;
  public buscar: string = '';

  constructor(
    private serviceDoctor: ServiceDoctor,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('adentro del componente');
    this.ngOnInit();
  }

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

  eliminar(id: string) {
    this.serviceDoctor.deleteMedico(id).subscribe(
      (res) => console.log('HTTP response', res),
      (err) => {
        console.log('HTTP error', err);

        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title:
            'No se puede Eliminar este registro porque tiene Diagnosticos registrados',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      () => console.log('HTTP request completed.')
    );
    this.ngOnInit();
    this.ngOnInit();
  }

  mostrarDetalle(id: string) {
    this.id = id;
    this.datosPersonales(this.id).then((r) => {
      this.dataDoctor = r.data;
    });
  }

  salirModal() {
    this.id = '';
    this.dataDoctor = {
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
  }

  async datosPersonales(id: string): Promise<respuestaDataModal<Doctor>> {
    return this.serviceDoctor.buscarMedico(id);
  }
  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 5;
    }
  }

  onBuscarDoctor(buscar: string) {
    this.page = 0;
    this.buscar = buscar;
  }
}
