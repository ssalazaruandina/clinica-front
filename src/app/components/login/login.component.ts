import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicoService } from 'src/app/services/medicos/medico.service';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private forBuilder: FormBuilder, private apiMedico:MedicoService,private router:Router,private aRoute:ActivatedRoute){
    
  }
  ngOnInit(): void {
    
  }
  
  id:string = "";
  nombre:string ="";

  login():void{
    this.apiMedico.getMedicoById(this.id).subscribe(
      (dato) => {
        console.log(dato)
      }
    )
  }
}
