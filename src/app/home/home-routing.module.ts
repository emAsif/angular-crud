import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as auth from '../core/auth/index';
import * as home from './components/index';

const routes: Routes = [{
    path: '',
    component: home.HomeComponent,
    children: [
      {
        path: 'start',
        // canActivate: [auth.AuthGuard],
        loadChildren: () => import('./start/start.module')
        .then(m => m.StartModule)
      },
      { 
        path: 'user', 
        // canActivate: [auth.AuthGuard],
        loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule) }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
