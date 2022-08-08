import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponentComponent } from 'src/app/autenticazione/login-component/login-component.component';

@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AuthModule { }
