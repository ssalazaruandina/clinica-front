import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Doctor, DoctorBody } from '../model/doctor.model';

enum url {
  LISTAR      = `https://back-clinica-end.onrender.com/api/medicos`,
  BUSCAR      = `https://back-clinica-end.onrender.com/api/medico/`,
  CREAR       = `https://back-clinica-end.onrender.com/api/createMedico`,
  ACTUALIZAR  = `https://back-clinica-end.onrender.com/api/updateMedico/`,
  ELIMINAR    = `https://back-clinica-end.onrender.com/api/deleteMedico/`,
}



@Injectable({
  providedIn: 'root'
})
export class ServiceDoctor {

  constructor(private http: HttpClient) {}

  async listarMedicos(){
    return this.http.get<respuesta<Doctor>>(url.LISTAR).toPromise();
  }
  async buscarMedico(id: string) {
    return this.http.get<respuesta<Doctor>>(url.BUSCAR+id).toPromise();
  }
  async crearMedico(Medico:DoctorBody ) {
    return this.http.post(url.CREAR, Medico).toPromise();
  }
  async actualizarMedico(id: any, Medico: DoctorBody) {
    return this.http.put<respuesta<Doctor>>(url.ACTUALIZAR+id, Medico).toPromise();
  }
  async deleteMedico(id: any) {
    return this.http.delete(url.ELIMINAR+id).toPromise();
  }
}
