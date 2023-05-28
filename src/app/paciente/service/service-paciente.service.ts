import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Paciente, PacienteBody } from '../model/paciente.model';
import { API } from 'src/app/shared/variables/variables';

enum url {
  LISTAR      = `/api/pacientes`,
  BUSCAR      = `paciente/`,
  CREAR       = `createPaciente`,
  ACTUALIZAR  = `updatePaciente/`,
  ELIMINAR    = `deletePaciente/`,
}

@Injectable({
  providedIn: 'root',
})
export class ServicePaciente {
  constructor(private http: HttpClient) {}

  async listarPacientes(){
    return this.http.get<respuesta<Paciente>>(url.LISTAR).toPromise();
  }
  buscarPaciente(id: string) {
    return this.http.get<respuesta<Paciente>>(API+url.BUSCAR+id);
  }
  crearPaciente(paciente:PacienteBody ) {
    return this.http.post(API+url.CREAR, paciente);
  }
  putPaciente(id: any, paciente: PacienteBody) {
    return this.http.put<respuesta<Paciente>>(API+url.ACTUALIZAR+id, paciente);
  }
  deletePaciente(id: any) {
    return this.http.delete(API+url.ELIMINAR+id);
  }
}
