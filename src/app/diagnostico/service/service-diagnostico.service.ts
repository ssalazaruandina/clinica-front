import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Diagnostico, DiagnosticoBody, DiagnosticoPaciente } from '../model/diagnostico.model';

enum url {
  LISTAR      = `/api/diagnosticos`,
  BUSCAR      = `/api/diagnostico/`,
  CREAR       = `/api/createDiagnostico`,
  ACTUALIZAR  = `/api/updateDiagnostico/`,
  ELIMINAR    = `/api/deleteDiagnostico/`,
  LISTARP = '/api/diagnosticoswithpaciente'
}

@Injectable({
  providedIn: 'root'
})
export class ServiceDiagnostico {

  constructor(private http: HttpClient) {}

  async listarDiagnosticos(){
    return this.http.get<respuesta<Diagnostico>>(url.LISTAR).toPromise();
  }
  async buscarDiagnostico(id: string) {
    return this.http.get<respuesta<Diagnostico>>(url.BUSCAR+id).toPromise();
  }
  async crearDiagnostico(diagnostico:DiagnosticoBody ) {
    return this.http.post(url.CREAR, diagnostico).toPromise();
  }
  async actualizarDiagnostico(id: any, diagnostico: DiagnosticoBody) {
    return this.http.put<respuesta<Diagnostico>>(url.ACTUALIZAR+id, diagnostico).toPromise();
  }
  async deleteDiagnostico(id: any) {
    return this.http.delete(url.ELIMINAR+id).toPromise();
  }
  async listarDiagnosticoPaciente(){
    return this.http.get<respuesta<DiagnosticoPaciente>>(url.LISTARP).toPromise();
  }
}
