import { NgModule } from '@angular/core';
import * as view from './components/index';
import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [view.ViewComponent],
  imports: [
    ViewRoutingModule,
    SharedModule
  ]
})
export class ViewModule { }
