import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  arrayList = [];
cartList = [];
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
    this.snackbar.open(msg,'purchased successfully',{
      duration:3000,
      panelClass:['style']
    })
  }
  cart(data){
    this.cartList.push(data);

  }
}
