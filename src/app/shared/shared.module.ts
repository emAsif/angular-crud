import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import * as shared from './components/index';



@NgModule({
  declarations: [shared.components],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [shared.components, CommonModule, ReactiveFormsModule]
})
export class SharedModule { }
