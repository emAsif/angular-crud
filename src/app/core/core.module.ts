import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import * as auth from './auth/index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [    
    { provide: HTTP_INTERCEPTORS, useClass: auth.JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: auth.ErrorInterceptor, multi: true },

    // provider used to create fake backend
    auth.fakeBackendProvider]
})
export class CoreModule { }
