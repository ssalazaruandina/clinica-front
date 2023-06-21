import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ServicePaciente } from '../service/service-paciente.service';
import { Paciente } from '../model/paciente.model';
import {
  respuesta,
  respuestaDataModal,
} from 'src/app/shared/interface/response.inteface';
import { extractDate } from 'src/app/shared/funtions/date.funtion';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  private respuesta: respuesta<Paciente> | any;
  public pacientes: Paciente[] = [];
  public id: string = '';
  public dataPaciente!: Paciente;
  public page: number = 0;
  public buscar: string = '';

  constructor(
    private servicePaciente: ServicePaciente,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('adentro del componente');
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  convertDateList() {
    this.pacientes.forEach((paciente) => {
      paciente.FechaNacimiento = paciente.FechaNacimiento.split('T')[0];
    });
  }

  eliminar(id: string) {
    this.servicePaciente.deletePaciente(id).subscribe(
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

  cargarDatos() {
    this.servicePaciente.listarPacientes().subscribe((res) => {
      this.respuesta = res;
      this.pacientes = this.respuesta.data;
      this.convertDateList();
    });
  }

  mostrarDetalle(id: string) {
    this.id = id;
    this.datosPersonales(this.id).then((r) => {
      this.dataPaciente = r.data;
    });
  }


  salirModal() {
    this.id = '';
    this.dataPaciente = {
      IdPaciente: '',
      Nombre: '',
      Apellidos: '',
      FechaNacimiento: '',
      Sexo: '',
      Peso: '',
      Altura: '',
      PresionArterial: '',
      FrecuenciaCardiaca: '',
      Temperatura: '',
      Observaciones: '',
    };
  }

  async datosPersonales(id: string): Promise<respuestaDataModal<Paciente>> {
    return this.servicePaciente.buscarPaciente(id);
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 5;
    }
  }

  onBuscarPaciente(buscar: string) {
    this.page = 0;
    this.buscar = buscar;
  }
}
