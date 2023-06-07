import { AfterViewInit, Component } from '@angular/core';
import { LoginService } from '../service/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loginBody } from '../model/login.model';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  options: AnimationOptions = {
    path: '/assets/img/logologin.json',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {}
  public body: loginBody = {
    usuario: '',
    contrasenia: '',
  };

  login(): void {
    console.log(this.body);
    console.log("arriba es dentro del body");
    
    this.loginService
      .login(this.body)
      .then((res) => {
        console.log(res);
        

        if (this.cookieService.get('accessToken')) {
          this.router.navigate(['paciente']);
        } else {
          this.router.navigate(['doctor']);
        }
      })
      .catch((rej) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Usuario y/o contraseña incorrecta',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
