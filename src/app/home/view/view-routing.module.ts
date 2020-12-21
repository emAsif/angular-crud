import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as view from './components/index';


const routes: Routes = [
  { 
    path: '', component: view.ViewComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
