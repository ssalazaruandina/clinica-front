import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginBody } from '../model/login.model';
import { respuesta } from 'src/app/shared/interface/response.inteface';

enum url {
  LOGIN = `/api/login`,
  LOGOUT = `/api/logout`,
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  async login(body: loginBody) {
    return this.http.post<respuesta<any>>(url.LOGIN, body).toPromise();
  }

  async logout() {
    return this.http.get(url.LOGOUT).toPromise();
  }
}
