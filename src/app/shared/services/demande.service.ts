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
    if (this.jwToken == null) {
      this.loadToken();
    }
    return this.httpClient.get(this.apiURL + '/demandes', {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }

  saveDemande(demande: any) {
    if (this.jwToken == null) {
      this.loadToken();
    }
    return this.httpClient.post(this.apiURL, demande, {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }

  AccepterDemande(idDemande: any) {
    if (this.jwToken == null) {
      this.loadToken();
    }

    return this.httpClient.get(this.apiURL + '/accepterDemande/' + idDemande, {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }

  RefuserDemande(idDemande: any) {
    if (this.jwToken == null) {
      this.loadToken();
    }
    return this.httpClient.get(this.apiURL + '/refuserDemande/' + idDemande, {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }
  EnvoyerDemande(demande: any) {
    if (this.jwToken == null) {
      this.loadToken();
    }
    return this.httpClient.post(this.apiURL + '/envoyerUneDemande', demande, {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    });
  }
}
