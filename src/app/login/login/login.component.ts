import { Component } from '@angular/core';
import { LoginService } from '../service/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loginBody } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}
    public body:loginBody={
      usuario:"",
      contrasenia:""
    }

  login(): void {
    this.loginService.login(this.body);
  }
}
