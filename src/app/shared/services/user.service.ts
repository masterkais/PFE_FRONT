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
export class UserService {
  private jwt: string = '';
  private jwToken: any;
  private roles: Array<any> = [];
  private apiURL = 'http://127.0.0.1:8080/user';
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
  getAll(){
    if(this.jwToken==null){this.loadToken();}
    console.log("jwt pour get"+this.jwToken)
    return this.httpClient.get(this.apiURL+"/users",{headers:new HttpHeaders({'Authorization':this.jwToken})});

    /*   console.log('jwt pour get' + localStorage.getItem('token'));
    return this.httpClient.get<any[]>(this.apiURL+"/demandes", {
      headers: new HttpHeaders({ Authorization: this.jwToken }),
    }); */
  }
save(user:any){
  if(this.jwToken==null){this.loadToken();}
  console.log("jwt pour get"+this.jwToken)
  return this.httpClient.post(this.apiURL,user,{headers:new HttpHeaders({'Authorization':this.jwToken})});

}
edit(user:any){
  if(this.jwToken==null){this.loadToken();}
  console.log("jwt pour get"+this.jwToken)
  return this.httpClient.put(this.apiURL,user,{headers:new HttpHeaders({'Authorization':this.jwToken})});
}
delete(user:any){
  if(this.jwToken==null){this.loadToken();}
  console.log("jwt pour get"+this.jwToken)
  return this.httpClient.delete(this.apiURL+'/delete/'+user.id,{headers:new HttpHeaders({'Authorization':this.jwToken})});

}
getById(id:number):Observable<any>{
  if(this.jwToken==null){this.loadToken();}
  return this.httpClient.get<any>(this.apiURL+'/'+id,{headers:new HttpHeaders({'Authorization':this.jwToken})});

}
}
