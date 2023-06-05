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
