import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as create from './components/index';


const routes: Routes = [
  { 
    path: '', component: create.CreateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
