import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as create from './components/index';
import { CreateRoutingModule } from './create-routing.module';



@NgModule({
  declarations: [create.CreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
