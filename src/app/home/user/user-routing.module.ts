import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as user from './components/index';

const routes: Routes = [
  { 
    path: '', component: user.UserComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
