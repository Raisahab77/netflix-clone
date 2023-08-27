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

  getAllMovies(){
    return this._http.get(this.apiUrl+`/movies`);
  }

  getMovieById(id:string){
    return this._http.get(this.apiUrl+'/movies/'+id);
  }

  getRandomMovie(type:number,genre:string){
    return this._http.get(this.apiUrl+`/movies/random?type=${type}&genres=${genre}`);
  }
  
  getMoviesByCategory(type:number,genre:string){
    return this._http.get(this.apiUrl+`/movies/category?type=${type}&genres=${genre}`);
  }

  getMyMovieList(userId:string){
    return this._http.get(this.apiUrl+`/my-list/${userId}`);
  }

  addMovieToMyList(movieData:any){
    return this._http.post(this.apiUrl+`/my-list`,movieData);
  }

  getMovieDetail(id:string){
    return this._http.get(this.apiUrl+`/movie-detail/${id}`);
  }
}
