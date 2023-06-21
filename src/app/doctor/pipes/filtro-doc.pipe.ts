import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from '../model/doctor.model';

@Pipe({
  name: 'filtroDoc'
})
export class FiltroDocPipe implements PipeTransform {

  transform(doctores: Doctor[], page: number=0,buscar:string=''): Doctor[] {
    if(buscar.length===0)
      return doctores.slice(page,page+5);

    const doctoresFilter= doctores.filter(p=>p.Nombre.includes(buscar)||p.Apellido.includes(buscar));
    return doctoresFilter.slice(page,page+5);
  }

}
