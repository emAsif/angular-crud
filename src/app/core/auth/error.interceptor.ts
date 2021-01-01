import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
          if (err.status === 401) {
            // auto logout if 401 response returned from api
            this.authService.logout();
          }

          // prefix for errors
          const error = ['API Error'];
        
         console.log(err)

          if (err.error.status) {
            error.push(err.error.status);
          }
    
          if (err.error.message) {
            error.push(err.error.message);
          }
    
          if (err.error.detail) {
            error.push(err.error.detail);
          }
    
          return throwError(error.join(' - '));
        }));
      }
}
