import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post('/api/authenticate', credentials)
      .pipe(map((result: any) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      }));
  }

  logout() {
    // delete saved token 
    // existence of valid token is a  logged in user
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
  }



}