import { Paciente } from 'src/app/paciente/model/paciente.model';

/**
 *   
 */
export interface Diagnostico {
  Fecha: string;
  Enfermedad: string;
  Sintomas: string;
  Tratamiento: string;
  Observaciones: string;
  Paciente: number;
  Medico: number;
  createdAd?: string;
  updateAd?: string;
  Id: number;
}

export interface DiagnosticoBody {
  Fecha: string;
  Enfermedad: string;
  Sintomas: string;
  Tratamiento: string;
  Observaciones: string;
  Paciente: number;
  Medico: number;
}

export interface DiagnosticoPaciente{
  Fecha: string;
  Enfermedad: string;
  Sintomas: string;
  Tratamiento: string;
  Observaciones: string;
  Paciente: number;
  Medico: number;
  createdAd?: string;
  updateAd?: string;
  Id: number;
  id: Paciente
}