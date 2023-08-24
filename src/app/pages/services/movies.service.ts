import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }
  apiUrl = environment.apiUrl;
  
  getAllMoviesList(type:number,genre:string){
    return this._http.get(this.apiUrl+`/lists?type=${type}&genres=${genre}`);
  }

  getMovieById(id:string){
    return this._http.get(this.apiUrl+'/movies/'+id);
  }

  getMoviesByCategory(category:string){
    return this._http.get(this.apiUrl+'/movies/category/'+category);
  }

  getRandomMovie(type:number,genre:string){
    return this._http.get(this.apiUrl+`/movies/random?type=${type}&genres=${genre}`);
  }

  getMyMovieList(userId:string){
    return this._http.get(this.apiUrl+`/my-list/${userId}`);
  }

  addMovieToMyList(movieData:any){
    return this._http.post(this.apiUrl+`/my-list`,movieData);
  }
}
