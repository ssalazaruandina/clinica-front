export interface respuesta<T> {
    status: number
    statusMsg: string
    data: T | T[]
  }

  export interface respuestaDataModal<T> {
    status: number
    statusMsg: string
    data: T 
  }