import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AuthGuard} from '../auth';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'start',
          canActivate: [AuthGuard],
          loadChildren: () => import('./start/start.module')
            .then(m => m.StartModule)
        }
      ]
    }])
  ]
})
export class HomeModule { }
