import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }
  apiUrl = environment.apiUrl;

  isUserExist(userName:string){
    return this._http.get(`${this.apiUrl}/users/${userName}`);
  }
}
