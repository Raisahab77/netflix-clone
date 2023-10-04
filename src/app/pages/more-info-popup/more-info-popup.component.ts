import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-more-info-popup',
  templateUrl: './more-info-popup.component.html',
  styleUrls: ['./more-info-popup.component.scss']
})
export class MoreInfoPopupComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MoreInfoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _moviesService:MoviesService
  ) { }

  // episodes:any;
  movieDetail:any;
  moviesByGenres:any;
  ngOnInit(): void {
    console.log(this.data);
    this.getMovieDetail(this.data._id);

    let type = 0 ;
    let genre = this.data.genres[0];
    this.getMoviesByCategory(type,genre);
  }

  close(){
    this.dialogRef.close();
  }

  getMovieDetail(id:string){
    this._moviesService.getMovieDetail(id).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.movieDetail = response.data;
      }
    })
  }

  getMoviesByCategory(type:number,genre:string){
    this._moviesService.getMoviesByCategory(type,genre).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.moviesByGenres = response.data;
      }
    })
  }

  expend(movieData:any){
    console.log(movieData);
    let documentData : any[] = [];
    for(let i=0;i<movieData.length;i++){
      let data = document.getElementById('more-items'+movieData[i]._id);
      console.log(data);
      data?.classList.add('disp-block');
      documentData.push(data);
    }

    console.log(documentData);
  }

}
