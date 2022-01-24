import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  titledata: any;
  sum=0;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.titledata = data.title;
  }

  ngOnInit() {
    this.titledata.forEach(element=>{
      this.sum=this.sum + element.price;
    })
    console.log(this.titledata);
    
  }
  delete(index,data){
    this.sum=this.sum-data.price;
    this.titledata.splice(index,1);
    
  }
}
