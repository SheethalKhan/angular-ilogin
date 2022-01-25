import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupComponent } from '../popup/popup.component';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  arrayList = [];
  cartList = [];
  panelOpenState: boolean = false;
  selected: any;
  msg: any = '';
  search: any = '';
  dialogRef: MatDialogRef<PopupComponent>;
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.msg = '';
    this.selected = '';
    window.innerHeight;
    console.log('HGT', window.innerHeight);
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res: any) => {
        this.arrayList = res;
        console.log(res);
      },
      (err) => {},
      () => {
        this.arrayList.forEach((element) => {
          element.price = 100;
        });
      }
    );
  }
  openSnack(msg) {
    this.snackbar.open(msg, 'purchased successfully', {
      duration: 3000,
      panelClass: ['style'],
    });
  }
  cart(data) {
    this.cartList.push(data);
  }
  popup() {
    this.dialogRef = this.dialog.open(PopupComponent, {
      width: '60%',
      data: { title: this.cartList },
    });
  }
  change(data) {
    alert(data);
  }
  searchmsg() {
    if (this.msg == '') {
      this.ngOnInit();
    } else {
      this.arrayList = this.arrayList.filter((res) => {
        return res.title.match(this.msg);
      });
    }
  }
}
