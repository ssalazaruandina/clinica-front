import { Pipe, PipeTransform } from '@angular/core';
import { DiagnosticoPaciente } from '../model/diagnostico.model';

@Pipe({
  name: 'filtroD'
})
export class FiltroDPipe implements PipeTransform {

  transform(diagnosticos: DiagnosticoPaciente[], page: number=0,buscar:string=''): DiagnosticoPaciente[] {
    if(buscar.length===0)
      return diagnosticos.slice(page,page+5);

    const diagnosticosFilter= diagnosticos.filter(p=>p.id.Nombre.includes(buscar)||p.id.Apellidos.includes(buscar));
    return diagnosticosFilter.slice(page,page+5);
  }

}
