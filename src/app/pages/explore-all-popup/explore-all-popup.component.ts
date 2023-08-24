import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HoverPopupComponent } from '../browse/hover-popup/hover-popup.component';

@Component({
  selector: 'app-explore-all-popup',
  templateUrl: './explore-all-popup.component.html',
  styleUrls: ['./explore-all-popup.component.scss']
})
export class ExploreAllPopupComponent implements OnInit {

  constructor(private _moviesService:MoviesService,
              private dialog:MatDialog,
              private dialogRef: MatDialogRef<ExploreAllPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  movies : any;
  isResCmpltd = false;
  timer = 0;

  ngOnInit(): void {
    // this.getMoviesByCategory();
    console.log(this.data);
    this.getAllMovies(0,this.data.genres);
  }

  // getMoviesByCategory(){
  //   this._moviesService.getMoviesByCategory(this.data).subscribe({
  //     next:(response)=>{
  //       console.log(response);
  //       this.movies = response;
  //       this.isResCmpltd = true;
  //     }
  //   })
  // }

  // this function gets all movies data from api 
  
  getAllMovies(type:number,genre:string){
    this._moviesService.getAllMoviesList(type,genre).subscribe({
      next:(response:any)=>{
        console.log(response);
        if(response.statusCode==200){
          this.movies = response.data;
          this.isResCmpltd = true;
        }
      }
    })
  }

  expend(movieData:any){
    console.log(movieData);
    for(let i=0;i<movieData.length;i++){
      let data = document.getElementById(movieData[i].id);
      data?.classList.add('disp-block');
    }
  }

  log(msg:any){
    console.log(msg);
  }

  onMouseEnter(id:string,data:any) {
    // let exploreAll!: ElementRef;
    
    // console.log(this.exploreAll);
    // let el = document.getElementById()
    var offsets = document.getElementById(id)!.getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    this.timer = window.setTimeout(() => {
      console.log("Mouse Enter event");
      this.dialog.open(HoverPopupComponent,{
        height:'350px',
        width:'300px',
        panelClass:'custom-dialog-container',
        position:{
          top:top+'px',
          left:left+'px'
        },
        data:data
      });
    }, 1000);
  }

  onMouseLeave() {
    window.clearTimeout(this.timer);
    // this.dialogRef.ngOnDestroy();
  }

  close(){
    this.dialogRef.close();
  }

}
