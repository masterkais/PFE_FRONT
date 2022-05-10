import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  private jwt: string = '';
  private jwToken: any;
  private roles: Array<any> = [];
  private apiURL = 'http://127.0.0.1:8080/demande';
  headers: any = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    }),
  };
  constructor(
    private httpClient: HttpClient,
    public authService: AuthenticationService,
    private router: Router
  ) {}
  loadToken() {
    this.jwToken = localStorage.getItem('token');
  }
  getAll() {
    if(this.jwToken==null){this.loadToken();}
    console.log("jwt pour get"+this.jwToken)
    return this.httpClient.get(this.apiURL+"/demandes",{headers:new HttpHeaders({'Authorization':this.jwToken})});

    /*   console.log('jwt pour get' + localStorage.getItem('token'));
    return this.httpClient.get<any[]>(this.apiURL+"/demandes", {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    }); */
  }

  /* q
    return this.httpClient
      .post<Product>(this.apiURL, JSON.stringify(Product), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  find(id: any): Observable<Product> {
    return this.httpClient
      .get<Product>(this.apiURL + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: any, Product: any): Observable<Product> {
    return this.httpClient
      .put<Product>(this.apiURL + id, JSON.stringify(Product), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  delete(id: any) {
    return this.httpClient
      .delete<Product>(this.apiURL + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  } */
}
