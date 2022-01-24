import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  arrayList = [];
  panelOpenState: boolean = false;
  constructor(private http: HttpClient,private snackbar:MatSnackBar) {}

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.arrayList = res;
        console.log(res);
      });
  }
  openSnack(msg){
    this.snackbar.openFromComponent(msg,{
      duration:3000
    })
  }
}
