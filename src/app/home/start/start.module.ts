import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as start from './components/index';
import { StartRoutingModule } from './start-routing.module';



@NgModule({
  declarations: [start.components],
  imports: [
    CommonModule,
    StartRoutingModule
  ]
})
export class StartModule { }
