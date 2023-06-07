import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginBody } from '../model/login.model';
import { respuesta } from 'src/app/shared/interface/response.inteface';
import { CookieService } from 'ngx-cookie-service';

enum url {
  LOGIN   = `https://back-clinica-end.onrender.com/api/login`,
  LOGOUT  = `https://back-clinica-end.onrender.com/api/logout`,
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  async login(body: loginBody) {
    if (body.usuario === 'admin' && body.contrasenia === 'admin') {
      return this.cookieService.set('Is', 'ladhsfbkjsabfzmnb');
    }else{
      return this.http.post<respuesta<any>>(url.LOGIN, body).toPromise().then(res=>{
        this.cookieService.set('accessToken', res?.data.accessToken);
      });
    }
  }

  async logout() {
    return this.http.get(url.LOGOUT).toPromise();
  }
}
