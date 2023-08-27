import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { HoverPopupComponent } from '../browse/hover-popup/hover-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {

  constructor(private _moviesService:MoviesService,
              private dialogRef: MatDialog) { }

  movies : any =  [];
  timer = 0;
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

  // When mouse enter inside div this event triggered and after two second it will open popup.
  onMouseEnter(id:string,data:any) {
    // To get position of div show that we can open popup on div position
    var offsets = document.getElementById(id)!.getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    // after entering mouse inside div this event will trigger after 1 second
    this.timer = window.setTimeout(() => {
      console.log("Mouse Enter event");
      this.dialogRef.open(HoverPopupComponent,{
        height:'350px',
        width:'300px',
        panelClass:'custom-dialog-container',              //created this is globle css file to remove popup padding and scroll bar
        position:{
          top:top+'px',
          left:left+'px'
        },
        data:data.movieId
      });
    }, 1000);
  }

  // When mouse leaves div, this event will trigger
  onMouseLeave() {
    // Here we are clearing timer value.
    window.clearTimeout(this.timer);
    // this.dialogRef.ngOnDestroy();
  }
}
