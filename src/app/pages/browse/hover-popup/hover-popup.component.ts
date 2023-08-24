import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from '../../services/movies.service';
// import { DialogData } from '../browse.component';

@Component({
  selector: 'app-hover-popup',
  templateUrl: './hover-popup.component.html',
  styleUrls: ['./hover-popup.component.scss']
})
export class HoverPopupComponent implements OnInit  {

  constructor(
    public matDialogRef: MatDialogRef<HoverPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _moviesService:MoviesService
  ) {}

  ngOnInit() {
    // will log the entire data object
    console.log(this.data);
  }

  onMouseLeave(): void {
    this.matDialogRef.close();
  }

  onMouseEnter(){
    console.log("Mouse enter inside popup");
  }

  // TODO: Move this function to some shared service so that we can call it from anywhere
  addMovieToMyList(movieId:string){
    let userId = localStorage.getItem('userId');
    let movieData = {
      userId:userId,
      movieId:movieId
    }
    this._moviesService.addMovieToMyList(movieData).subscribe({
      next:(response)=>{
        console.log(response);
      }
    })
  }

}
