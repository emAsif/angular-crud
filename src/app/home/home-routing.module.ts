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
        canActivate: [auth.AuthGuard],
        loadChildren: () => import('./start/start.module')
        .then(m => m.StartModule)
      },
      { 
        path: 'users', 
        canActivate: [auth.AuthGuard],
        loadChildren: () => import('./view/view.module')
        .then(m => m.ViewModule) 
      },
      { 
        path: 'user/:id', 
        canActivate: [auth.AuthGuard],
        loadChildren: () => import('./create/create.module')
        .then(m => m.CreateModule) 
      },
      // otherwise redirect to home 
      { 
        path: '**', 
        canActivate: [auth.AuthGuard],
        loadChildren: () => import('./start/start.module')
        .then(m => m.StartModule) 
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
