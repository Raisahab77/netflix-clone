import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  constructor(private _moviesService:MoviesService) { }

  movies = [];
  ngOnInit(): void {
    this.getMyMovieList();
  }

  getMyMovieList(){
    let userId:string = localStorage.getItem('userId')||'';
    this._moviesService.getMyMovieList(userId).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.movies = response.data;
      }
    })
  }
}
