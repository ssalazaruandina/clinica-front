import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico, respuesta } from 'src/app/models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:8000/api/medicos/";

  getMedico() {
    this.url = "http://localhost:8000/api/medicos/";
    return this.http.get<respuesta>(this.url);
  }
  getMedicoById(id: any) {
    let url = "http://localhost:8000/api/medico/" + id;
    return this.http.get<Medico>(url);
  }
  postMedico(paciente: any) {
    this.url = "http://localhost:8000/api/createMedico/";
    return this.http.post(this.url, paciente);
  }
  putMedico(id: any, paciente: any) {
    let url = "http://localhost:8000/api/updateMedico/"+id;
    return this.http.put<Medico>(url, paciente);
  }
  deleteMedico(id: any) {
    this.url = "http://localhost:8000/api/deleteMedico/";
    let url = this.url + id;
    return this.http.delete(url)
  }
}
