import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import * as auth from './core/auth/index';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/start',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule)
  },
  {
    path: 'home',
    canActivate: [auth.AuthGuard],
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  }
];

@NgModule({
  // preloadingStrategy used for module rendering optimization
  imports: [RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
