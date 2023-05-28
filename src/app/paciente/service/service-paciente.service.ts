import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Paciente, PacienteBody } from '../model/paciente.model';
import { API } from 'src/app/shared/variables/variables';

enum url {
  LISTAR      = `/api/pacientes`,
  BUSCAR      = `/api/paciente/`,
  CREAR       = `/api/createPaciente`,
  ACTUALIZAR  = `/api/updatePaciente/`,
  ELIMINAR    = `/api/deletePaciente/`,
}

@Injectable({
  providedIn: 'root',
})
export class ServicePaciente {
  constructor(private http: HttpClient) {}

  async listarPacientes(){
    return this.http.get<respuesta<Paciente>>(url.LISTAR).toPromise();
  }
  async buscarPaciente(id: string) {
    return this.http.get<respuesta<Paciente>>(url.BUSCAR+id).toPromise();
  }
  async crearPaciente(paciente:PacienteBody ) {
    return this.http.post(url.CREAR, paciente).toPromise();
  }
  async putPaciente(id: any, paciente: PacienteBody) {
    return this.http.put<respuesta<Paciente>>(url.ACTUALIZAR+id, paciente).toPromise();
  }
  async deletePaciente(id: any) {
    return this.http.delete(url.ELIMINAR+id).toPromise();
  }
}
