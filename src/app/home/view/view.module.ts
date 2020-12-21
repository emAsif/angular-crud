import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as view from './components/index';
import { ViewRoutingModule } from './view-routing.module';



@NgModule({
  declarations: [view.ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
