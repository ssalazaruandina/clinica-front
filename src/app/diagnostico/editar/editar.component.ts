import { ServiceDiagnostico } from './../service/service-diagnostico.service';
import { Component } from '@angular/core';
import { Diagnostico } from '../model/diagnostico.model';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  id! : string;
  private sub: any;
  private respuesta: respuesta<Diagnostico> | any;
  public diagnostico: Diagnostico ={
    Id: 0,
    Paciente :0,
    Medico: 0,
    Fecha : '',
    Enfermedad: '',
    Sintomas: '',
    Tratamiento :'',
    Observaciones:''
  };

  constructor(
    private ServiceDiagnostico: ServiceDiagnostico,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.recuperarDatos(this.id);
    });
  }

  cancelar():void{
    this.router.navigate(['diagnostico']);
  }

  registrar():void {
    this.ServiceDiagnostico.actualizarDiagnostico(this.id,this.diagnostico)
    this.router.navigate(['diagnostico']);
  }

  recuperarDatos(id: string) {
    this.ServiceDiagnostico.buscarDiagnostico(id).then((res) => {
      this.respuesta = res;
      this.diagnostico = this.respuesta.data;
      
      this.diagnostico.Fecha = 
        this.diagnostico.Fecha.split('T')[0]
      
    });
  }
  
  

}
