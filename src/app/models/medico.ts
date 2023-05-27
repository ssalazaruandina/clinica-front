export interface respuesta {
    status: number
    statusMsg: string
    data: Medico[]
  }
  
  export interface Medico {
    createdAd?: string
    updateAd?: string
    IdMedico: number
    Nombre: string
    Apellido: string
    FechaNacimiento: Date
    Genero: string
    Direccion: string
    Ciudad: string
    Pais: string
    Telefono: string
    CorreoElectronico: string
    Especialidad: string
    NumeroColegiatura: string
    DescripcionProfecional: string
  }
  