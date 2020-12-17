import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as start from './components/index';


const routes: Routes = [
  { 
    path: '', component: start.StartComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
