import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private apiUrl = environment.customApiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  create(values): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, values);
  }
}