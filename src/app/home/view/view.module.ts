import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as view from './components/index';



@NgModule({
  declarations: [view.ViewComponent],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
