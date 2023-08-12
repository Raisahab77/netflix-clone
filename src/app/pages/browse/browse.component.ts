import { Component, OnInit, Inject, HostListener, ViewChild, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HoverPopupComponent } from './hover-popup/hover-popup.component';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})


export class BrowseComponent implements OnInit{

  
  constructor(private dialogRef: MatDialog,
              private _authService:AuthService,
              private _router:Router)
              {}

  movies = [1,2,3,4,5,6,7,8,9,10];
  timer = 0;
  chooseRole : boolean = false;
  slider:any;
  defaultTransform:any;

  ngOnInit(): void {
    let activeRole = localStorage.getItem('activeRole');
    if(activeRole==='kids'){
      this.chooseRole = false;
    }
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
  }

  openDialog(){
    console.log("Button clicked");
    this.dialogRef.open(HoverPopupComponent);
  }


  onMouseEnter(id:any,index:any) {
    // let el = document.getElementById()
    var offsets = document.getElementById(id+index)!.getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    this.timer = window.setTimeout(() => {
      console.log("Mouse Enter event");
      this.dialogRef.open(HoverPopupComponent,{
        height:'350px',
        width:'300px',
        panelClass:'custom-dialog-container',
        position:{
          top:top+'px',
          left:left+'px'
        }
      });
    }, 1000);
  }

  onMouseLeave() {
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

  next(slider:any) {
    let img = document.getElementById('img')!;
    document.getElementById(slider)!.classList.add('scroll-smooth');
    document.getElementById(slider)!.scrollLeft += img.offsetWidth;
  }

  back(slider:any) {
    let img = document.getElementById('img')!.offsetWidth;
    document.getElementById(slider)!.scrollLeft -= img;
  }

}
