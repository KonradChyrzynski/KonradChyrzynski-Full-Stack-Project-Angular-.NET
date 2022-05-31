import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BearService {

    
    constructor(private http: HttpClient) { }
    
    url = 'https://api.punkapi.com/v2/beers';

    getConfig() {
        return this.http.get(this.url)
    }

}
