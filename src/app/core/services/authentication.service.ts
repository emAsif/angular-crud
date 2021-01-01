import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

// api response object structure
export interface AuthResponseData {
    idToken: string;
    username: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) { }

    // auth login method with authetication.
    login(username: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(`${environment.apiUrl}/auth`, { username, password })
            .pipe(tap(resData => {
                this.handleAuthentication(
                    resData.username,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                );
            }));
    }

    // autologin with validation checks for token validity.
    autoLogin(): void {
        const userData: {
            username: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }

        const loadedUser = new User(
            userData.username,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        );

        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration =
                new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    // manual logout method.
    logout(): void {
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    //autologout on token expiration.
    autoLogout(expirationDuration: number): void {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    // setting token expiration time,storing in local storage and emits observable.
    private handleAuthentication(
        username: string,
        userId: string,
        token: string,
        expiresIn: number
    ): void {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(username, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
}
