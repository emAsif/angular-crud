import { NgModule } from '@angular/core';
import * as create from './components/index';
import { CreateRoutingModule } from './create-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [create.CreateComponent],
  imports: [
    CreateRoutingModule,
    SharedModule
  ]
})
export class CreateModule { }
