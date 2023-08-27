import { Component, OnInit, Inject, HostListener, ViewChild, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HoverPopupComponent } from './hover-popup/hover-popup.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { ExploreAllPopupComponent } from '../explore-all-popup/explore-all-popup.component';
import { MoreInfoPopupComponent } from '../more-info-popup/more-info-popup.component';

// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})


export class BrowseComponent implements OnInit{

  
  constructor(private dialogRef: MatDialog,
              private _authService:AuthService,
              private _router:Router,
              private _moviesService:MoviesService)
              {}

  movies : any;
  timer = 0;
  chooseRole : boolean = false;
  slider:any;
  defaultTransform:any;
  displayMovie:any;
  isLoading:boolean = true;
  dummyData = [
    {
      "data1":[1,2,3,4,5,6,7,8,9,10]
    },
    {
      "data1":[1,2,3,4,5,6,7,8,9,10]
    },
    {
      "data1":[1,2,3,4,5,6,7,8,9,10]
    },
    {
      "data1":[1,2,3,4,5,6,7,8,9,10]
    },
    {
      "data1":[1,2,3,4,5,6,7,8,9,10]
    }
  ]

  ngOnInit(): void {
    let activeRole = localStorage.getItem('activeRole');
    if(activeRole==='kids'){
      this.chooseRole = false;
    }
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
    let url = this._router.url;
    let type: number,genre: string;
    if(url==='/browse')
    {
      type = 0 ;
      genre = '';
      this.getAllMoviesList(type,genre);
      this.getRandomMovie(type,genre);
    }
    else if(url==='/browse/series')
    {
      type = 1;
      genre = '';
      this.getAllMoviesList(type,genre);
      this.getRandomMovie(type,genre);
    }
    else if(url==='/browse/movies')
    {
      type = 2;
      genre = '';
      this.getAllMoviesList(type,genre);
      this.getRandomMovie(type,genre);
    }
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
        data:data
      });
    }, 1000);
  }

  // When mouse leaves div, this event will trigger
  onMouseLeave() {
    // Here we are clearing timer value.
    window.clearTimeout(this.timer);
    // this.dialogRef.ngOnDestroy();
  }

  openBrowsePage(role:string){
    localStorage.setItem('activeRole',role);
    this.chooseRole = false;
    if(role==='kids'){
      this._router.navigateByUrl('/kids');
    }
  }

  // This function use to scroll list of movies on forword direction
  next(sliderId:string) {
    // here we are getting size of one image so that we can scroll x px in y axis 
    let img = document.getElementById('img')!;
    document.getElementById(sliderId)!.classList.add('scroll-smooth');
    document.getElementById(sliderId)!.scrollLeft += img.offsetWidth;
  }

  // This function use to scroll list of movies on backwords direction
  back(sliderId:string) {
    let img = document.getElementById('img')!.offsetWidth;
    document.getElementById(sliderId)!.scrollLeft -= img;
  }

  // this function gets all movies data from api 
  getAllMoviesList(type:number,genre:string){
    this._moviesService.getAllMoviesList(type,genre).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.movies = response.data;
        this.isLoading = false;
      }
    })
  }

  getRandomMovie(type:number,genre:string){
    this._moviesService.getRandomMovie(type,genre).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.displayMovie = response[0];
      }
    })
  }

  getMovieById(id:string){
    this._moviesService.getMovieById(id).subscribe({
      next:(respose)=>{
        console.log(respose);
      }
    })
  }

  // this function opens a popup in which we fetch list of movies based on genres 
  exploreAll(data:any){
    // TODO: when popup open we need to change url so that when user refresh page popup not close 
    // this._router.navigateByUrl("/browse/genre/"+data.id);
    this.dialogRef.open(ExploreAllPopupComponent,{
      width:'80%',
      height:'90%',
      panelClass:'custom-dialog-container',
      data:data
    });
  }

  moreInfo(data:any){
    this.dialogRef.open(MoreInfoPopupComponent,{
      width:'50%',
      height:'90%',
      panelClass:'custom-dialog-container',
      data:data
    });
  }

}
