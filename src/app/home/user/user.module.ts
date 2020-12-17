import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import * as user from './components/index';


@NgModule({
  declarations: [user.components],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
