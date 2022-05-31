import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService{


  constructor(private _http: HttpClient) { }
  _url = 'https://localhost:7131/api/UserAdmission';

  enroll(user: User) {
    return this._http.post<any>(this._url, user)
  }
}
