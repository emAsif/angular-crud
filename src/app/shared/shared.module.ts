import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as shared from './components/index';



@NgModule({
  declarations: [shared.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    shared.components, 
    CommonModule, 
    ReactiveFormsModule,
    FormsModule]
})
export class SharedModule { }
