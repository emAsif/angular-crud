import { NgModule } from '@angular/core';
import * as home from './components/index'

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [home.components],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
