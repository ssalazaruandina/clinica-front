import { Component, OnInit } from '@angular/core';
import { ServiceDiagnostico } from '../service/service-diagnostico.service';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { Diagnostico, DiagnosticoPaciente } from '../model/diagnostico.model';
import { ActivatedRoute, Router } from '@angular/router';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit{
  private respuesta: respuesta<Diagnostico> | any;
  public diagnosticos: DiagnosticoPaciente[] = [];
  public actualId: number;

  constructor(
    private ServiceDiagnostico: ServiceDiagnostico,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('adentro del componente');
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  convertDateList() {
    this.diagnosticos.forEach((diagnostico) => {
      diagnostico.Fecha = diagnostico.Fecha.split('T')[0];
    });
  }

  eliminar(id: number) {
    this.ServiceDiagnostico.deleteDiagnostico(id);
    this.ngOnInit();
    this.ngOnInit();
  }

  cargarDatos() {
    this.ServiceDiagnostico.listarDiagnosticoPaciente().then((res) => {
      this.respuesta = res;
      this.diagnosticos = this.respuesta.data;
      this.convertDateList();
    });
  }

  mostrarDetalle(id: number) {
    this.actualId = id;
  }

  generarDiagnostico() {}

  salirModal() {
    //this.id = ""
  }

  generarPDF(i: number) {
    const documentDefinition: any = {
      content: [
        { text: 'RECETA MÉDICA', style: 'titulo' },
        { text: 'Enfermedad:', style: 'subtitulo' },
        { text: this.diagnosticos[i].Enfermedad, style: 'contenido' },
        { text: 'Observaciones:', style: 'subtitulo' },
        { text: this.diagnosticos[i].Observaciones, style: 'contenido' },
        { text: 'Fecha:', style: 'subtitulo' },
        { text: this.diagnosticos[i].Fecha, style: 'contenido' },
        { text: 'Síntomas:', style: 'subtitulo' },
        { text: this.diagnosticos[i].Sintomas, style: 'contenido' },
        { text: 'Tratamiento:', style: 'subtitulo' },
        { text: this.diagnosticos[i].Tratamiento, style: 'contenido' },
      ],
      styles: {
        titulo: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        subtitulo: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        contenido: {
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
      },
    };

    const pdf = pdfMake.createPdf(documentDefinition);
    pdf.open();
  }
}
