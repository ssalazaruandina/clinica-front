export interface respuesta<T> {
    status: number
    statusMsg: string
    data: T | T[]
  }