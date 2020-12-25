import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as create from './components/index';
import { CreateRoutingModule } from './create-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [create.CreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateRoutingModule
  ]
})
export class CreateModule { }
