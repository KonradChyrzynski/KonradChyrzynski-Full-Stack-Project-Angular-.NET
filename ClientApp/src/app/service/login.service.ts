import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserLogin } from '../models/userLogin.model';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {

    
    constructor(private http: HttpClient) { }
    
    url = 'https://localhost:7131/api/UserAdmission/Login';

    login(user: UserLogin) {
        return this.http.post<any>(this.url, user)
    }

}