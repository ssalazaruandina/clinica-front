import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente, respuesta } from 'src/app/models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:8000/api/pacientes/";

  getPacientes() {
    this.url = "http://localhost:8000/api/pacientes/";
    return this.http.get<respuesta>(this.url);
  }
  getPacienteById(id: any) {
    let url = this.url + id;
    return this.http.get<Paciente>(url);
  }
  postPaciente(paciente: any) {
    this.url = "http://localhost:8000/api/createPaciente/";
    return this.http.post(this.url, paciente);
  }
  putPaciente(id: any, paciente: any) {
    let url = this.url + id;
    return this.http.put<Paciente>(url, paciente);
  }
  deletePaciente(id: any) {
    this.url = "http://localhost:8000/api/deletePaciente/";
    let url = this.url + id;
    return this.http.delete(url)
  }
}
