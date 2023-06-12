import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicePaciente } from '../service/service-paciente.service';
import { Paciente } from '../model/paciente.model';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { extractDate } from 'src/app/shared/funtions/date.funtion';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  private respuesta: respuesta<Paciente> | any;
  public pacientes: Paciente[] = [];
  public id:string="";

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
    this.servicePaciente.deletePaciente(id).then(res=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'No se puede Eliminar este registro porque tiene Diagnosticos registrados',
        showConfirmButton: false,
        timer: 1500,
      });
    });
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

  mostrarDetalle(id:string){
    this.id = id;
  }

  generarDiagnostico(){
  }

  salirModal(){
    this.id = ""
  }
}
