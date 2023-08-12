import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  apiUrl = environment.apiUrl;

  signIn(data:any){
    return this._http.post(`${this.apiUrl}/user/login`,data);
  }

  test_404(){
    return this._http.get(`${this.apiUrl}/test`);
  }

  public isAuthenticated(): boolean {
    let token : string | null = '';
    if(localStorage.getItem('rememberMe')=='true'){
      token = localStorage.getItem('token');
    }else{
      token = sessionStorage.getItem('token');
    }
    // Check whether the token is expired and return
    // true or false
    if(!token){
      return false;
    }
    return true;
  }
}
