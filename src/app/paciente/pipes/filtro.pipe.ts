import { Pipe, PipeTransform } from '@angular/core';
import { Paciente } from '../model/paciente.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pacientes: Paciente[], page: number=0,buscar:string=''): Paciente[] {
    if(buscar.length===0)
      return pacientes.slice(page,page+5);

    const pacienteFilter= pacientes.filter(p=>p.Nombre.includes(buscar)||p.Apellidos.includes(buscar));
    return pacienteFilter.slice(page,page+5);
  }

}
