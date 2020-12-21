import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as create from './components/index';



@NgModule({
  declarations: [create.CreateComponent],
  imports: [
    CommonModule
  ]
})
export class CreateModule { }
