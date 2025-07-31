import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  register(payload: RegisterPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/register`, payload);
  }

  login(payload: LoginPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/login`, payload, {
      withCredentials: true
    })
  }
}