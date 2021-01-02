import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { NewUser } from 'src/app/models/newUser';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private apiUrl = environment.formUrl;

  constructor(private readonly http: HttpClient) { }

  create(values): Observable<NewUser> {
    return this.http.post<NewUser>(`${this.apiUrl}`, values);
  }
}