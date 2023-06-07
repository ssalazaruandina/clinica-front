import { Component } from '@angular/core';
import { ServiceDiagnostico } from '../service/service-diagnostico.service';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Diagnostico, DiagnosticoPaciente } from '../model/diagnostico.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  private respuesta: respuesta<Diagnostico> | any;
  public diagnosticos: DiagnosticoPaciente[] = [];
  //public id:string="";

  constructor(
    private ServiceDiagnostico: ServiceDiagnostico,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  convertDateList() {
    this.diagnosticos.forEach((diagnostico) => {
      diagnostico.Fecha = diagnostico.Fecha.split('T')[0];
    });
  }

  eliminar(id: number) {
    this.ServiceDiagnostico.deleteDiagnostico(id);
    this.ngOnInit()
    this.ngOnInit()
  }

  cargarDatos() {
    this.ServiceDiagnostico.listarDiagnosticoPaciente().then((res) => {
      this.respuesta = res;
      this.diagnosticos = this.respuesta.data;
      this.convertDateList();
    });
  }

  mostrarDetalle(id:number){
    //this.id = id;
  }

  generarDiagnostico(){
  }

  salirModal(){
   //this.id = ""
  }

} 
