import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available, take() for only first emission.
        this.authService.user.pipe(take(1)).subscribe(user => {
            if(user && user.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
            }
        })
        return next.handle(request);
    }
}
