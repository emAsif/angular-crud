import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private apiUrl = environment.formUrl;

  constructor(private readonly http: HttpClient) { }

  create(values): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, values);
  }
}