import { ServicePaciente } from './../service/service-paciente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../model/paciente.model';
import { respuesta } from 'src/app/shared/interface/response.inteface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  id!: string;
  private sub: any;
  private respuesta: respuesta<Paciente> | any;
  public paciente: Paciente = {
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

  constructor(
    private servicePaciente: ServicePaciente,
    private route: ActivatedRoute,
    private router:Router
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.recuperarDatos(this.id);
    });
  }

  cancelar():void{
    this.router.navigate(['paciente']);
  }

  registrar():void {
    this.servicePaciente.actualizarPaciente(this.id,this.paciente)
    this.router.navigate(['paciente']);
  }

  recuperarDatos(id: string) {
    this.servicePaciente.buscarPaciente(id).then((res) => {
      this.respuesta = res;
      this.paciente = this.respuesta.data;
      
      this.paciente.FechaNacimiento = 
        this.paciente.FechaNacimiento.split('T')[0]
      
    });
  }
}
