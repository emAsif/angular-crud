import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as auth from '../core/auth/index';
import { HomeComponent } from './home.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'start',
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
