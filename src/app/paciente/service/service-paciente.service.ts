import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respuesta, respuestaDataModal } from 'src/app/shared/interface/response.inteface';
import { Paciente, PacienteBody } from '../model/paciente.model';
import { Observable } from 'rxjs';
import { Diagnostico } from 'src/app/diagnostico/model/diagnostico.model';

enum url {
  LISTAR      = `https://back-clinica-end.onrender.com/api/pacientes`,
  BUSCAR      = `https://back-clinica-end.onrender.com/api/paciente/`,
  CREAR       = `https://back-clinica-end.onrender.com/api/createPaciente`,
  ACTUALIZAR  = `https://back-clinica-end.onrender.com/api/updatePaciente/`,
  ELIMINAR    = `https://back-clinica-end.onrender.com/api/deletePaciente/`,
  HISTORIAL   = `https://back-clinica-end.onrender.com/api/diagnosticos/`
}

@Injectable({
  providedIn: 'root',
})
export class ServicePaciente {
  constructor(private http: HttpClient) {}

  listarPacientes(){
    return this.http.get<respuesta<Paciente>>(url.LISTAR);
  }
  async buscarPaciente(id: string) {
    return this.http.get<respuestaDataModal<Paciente>>(url.BUSCAR+id).toPromise();
  }
  async crearPaciente(paciente:PacienteBody ) {
    return this.http.post(url.CREAR, paciente).toPromise();
  }
  async actualizarPaciente(id: any, paciente: PacienteBody) {
    return this.http.put<respuesta<Paciente>>(url.ACTUALIZAR+id, paciente).toPromise();
  }
  deletePaciente(id: any) {
    return this.http.delete(url.ELIMINAR+id,{observe: 'response'});
  }
  buscarHistorial(id: string) {
    return this.http.get<respuesta<Diagnostico>>(url.HISTORIAL+id+"/paciente");
  }
}
