import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { decodedAccessToken } from 'src/app/shared/funtions/decoder.funtion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  private sub: any;
  public id: string = '';
  private token!: any;
  public idMedico: string = '';
  private forBuilder: any;

  private fecha: Date = new Date();
  public fechaActual: string = this.fecha.toISOString().split('T')[0];

  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number

      this.token = decodedAccessToken(this.cookieService.get('accessToken'));
      this.idMedico = this.token.code;

      this.formDiagnostico.patchValue({
        Medico: this.idMedico,
        Paciente: Number(this.id)
      })


    });


    this.formDiagnostico = this.forBuilder.group({
      Fecha: ['', [Validators.required]],
      Enfermendad: ['', [Validators.required]],
      Sintomas: ['', [Validators.required]],
      Tratamiento: ['', [Validators.required]],
      Observaciones: ['', [Validators.required]],
      Paciente: ['', [Validators.required]],
      Medico: ['', [Validators.required]],
    });
  }

  public formDiagnostico: FormGroup = new FormGroup({
    Fecha: new FormControl(this.fechaActual),
    Enfermedad: new FormControl(''),
    Sintomas: new FormControl(''),
    Tratamiento: new FormControl(''),
    Observaciones: new FormControl(''),
    Paciente: new FormControl(""),
    Medico: new FormControl(""),
  });

  cancelar() {
    this.router.navigate(['paciente']);
  }

  registrar() {
    if (
      this.formDiagnostico.controls['Fecha'].errors?.['required'] ||
      this.formDiagnostico.controls['Enfermedad'].errors?.['required'] ||
      this.formDiagnostico.controls['Sintomas'].errors?.['required'] ||
      this.formDiagnostico.controls['Tratamiento'].errors?.['required'] ||
      this.formDiagnostico.controls['Observaciones'].errors?.['required'] 
    ) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ingrese Todos Los Datos',
        showConfirmButton: false,
        timer: 1500,
      });
    }else{
      // this.apiPaciente.crearPaciente(this.formDiagnostico.value).then(
      //   () => {
      //     this.pacientes.push(this.formDiagnostico.value)
      //     Swal.fire({
      //       position: 'top-end',
      //       icon: 'success',
      //       title: 'Registro Exitoso',
      //       showConfirmButton: false,
      //       timer: 1500
      //     })
      //     this.router.navigate(['paciente']);
      // });  
      console.log("adentro ");
      
    }
  }
}
