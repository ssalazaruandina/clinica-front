export interface Doctor {
  createdAd?: string;
  updateAd?: string;
  IdMedico: string;
  Nombre: string;
  Apellido: string;
  FechaNacimiento: string;
  Genero: string;
  Direccion: string;
  Ciudad: string;
  Pais: string;
  Telefono: string;
  CorreoElectronico: string;
  Contrasenia: string;
  Especialidad: string;
  NumeroColegiatura: string;
  DescripcionProfecional: string;
}

export interface DoctorBody {
    Nombre: string
    Apellido: string
    FechaNacimiento: string
    Genero: string
    Direccion: string
    Ciudad: string
    Pais: string
    Telefono: string
    CorreoElectronico: string
    Contrasenia: string;
    Especialidad: string
    NumeroColegiatura: string
    DescripcionProfecional: string
  }
