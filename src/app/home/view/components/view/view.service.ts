import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { NewUser } from 'src/app/models/newUser.class';

@Injectable({
    providedIn: 'root'
})
export class ViewService {
    private apiUrl = environment.apiUrl;
    constructor(private readonly http: HttpClient) { }

    getAll(): Observable<NewUser[]> {
        return this.http.get<NewUser[]>(`${this.apiUrl}/users`);
    }

}