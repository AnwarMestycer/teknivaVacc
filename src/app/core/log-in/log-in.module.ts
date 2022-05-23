import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule
  ]
})
export class LogInModule { }
