import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ogin',
  templateUrl: './ogin.component.html',
  styleUrls: ['./ogin.component.css']
})
export class OginComponent implements OnInit {
formdata:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formdata=this.fb.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.pattern('[0-9]'),Validators.minLength(5)]],
      email:['',[Validators.required,Validators.email]]
    })
  }

}