export interface Paciente {
  createdAd?: string;
  updateAd?: string;
  IdPaciente: string;
  Nombre: string;
  Apellidos: string;
  FechaNacimiento: string;
  Sexo: string;
  Peso: string;
  Altura: string;
  PresionArterial: string;
  FrecuenciaCardiaca: string;
  Temperatura: string;
  Observaciones: string;
}

export interface PacienteBody {
  Nombre: string;
  Apellidos: string;
  FechaNacimiento: string;
  Sexo: string;
  Peso: string;
  Altura: string;
  PresionArterial: string;
  FrecuenciaCardiaca: string;
  Temperatura: string;
}
