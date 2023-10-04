import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MoviesService } from '../../services/movies.service';
import { MoreInfoPopupComponent } from '../../more-info-popup/more-info-popup.component';
import { Router } from '@angular/router';
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
    private dialogRef: MatDialog,
    private _moviesService:MoviesService,
    private _router:Router
  ) {}

  isMute = false;
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

  removeMovieFromMyList(id:string){
    this._moviesService.removeMovieFromMyList(id).subscribe({
      next:(response)=>{
        console.log(response);
      }
    })
  }

  moreInfo(data:any){
    this.dialogRef.closeAll();
    this.dialogRef.open(MoreInfoPopupComponent,{
      width:'50%',
      height:'90%',
      panelClass:'custom-dialog-container',
      data:data
    });
  }

  navToWatch(){
    this.dialogRef.closeAll();
    this._router.navigateByUrl('watch/567');
  }

  muteVideo(id:string){
    // let muted = document.querySelector("video")?.muted;
    // muted = !this.muted;
    let video : any = document.getElementById(id);
    video.muted = !video.muted;
    this.isMute = !this.isMute;
  }

}
