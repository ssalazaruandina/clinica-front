import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export  function  playerFactory ( )  { 
  return  import ( /* webpackChunkName: 'lottie-web' */  'lottie-web' ) ; 
}

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule,LoginRoutingModule,LottieModule.forRoot({ player: playerFactory })],
  providers: [LoginService]
})
export class LoginModule {}
