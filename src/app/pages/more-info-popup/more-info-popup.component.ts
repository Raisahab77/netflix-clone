import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-more-info-popup',
  templateUrl: './more-info-popup.component.html',
  styleUrls: ['./more-info-popup.component.scss']
})
export class MoreInfoPopupComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MoreInfoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  episodes = [1,2,3,4,5,6,7,8,9,10];
  ngOnInit(): void {
    console.log(this.data);
  }

  close(){
    this.dialogRef.close();
  }

}
