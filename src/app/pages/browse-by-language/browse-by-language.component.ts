import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-browse-by-language',
  templateUrl: './browse-by-language.component.html',
  styleUrls: ['./browse-by-language.component.scss']
})
export class BrowseByLanguageComponent implements OnInit {

  constructor(private _moviesService:MoviesService) { }
  movies : any[] = [];
  
  ngOnInit(): void {
    this.getAllMovies();
  }

  // this function gets all movies data from api 
  getAllMovies(){
    this._moviesService.getAllMovies().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.movies = response.data;
      }
    })
  }
}
