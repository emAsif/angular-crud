import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import * as login from './components/index';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [login.components],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }])
  ]
})
export class LoginModule { }
