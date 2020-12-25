import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as start from './components/index';
import { StartRoutingModule } from './start-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [start.components],
  imports: [
    CommonModule,
    StartRoutingModule,
    SharedModule
  ]
})
export class StartModule { }
