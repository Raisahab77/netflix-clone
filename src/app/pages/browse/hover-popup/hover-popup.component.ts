import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../browse.component';

@Component({
  selector: 'app-hover-popup',
  templateUrl: './hover-popup.component.html',
  styleUrls: ['./hover-popup.component.scss']
})
export class HoverPopupComponent implements OnInit  {

  constructor(
    public matDialogRef: MatDialogRef<HoverPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onMouseLeave(): void {
    this.matDialogRef.close();
  }

  onMouseEnter(){
    console.log("Mouse enter inside popup");
  }

  ngOnInit(): void {
    console.log("Popup works")
  }

}
