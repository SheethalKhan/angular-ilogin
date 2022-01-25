import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validation } from '../validation';

@Component({
  selector: 'app-ogin',
  templateUrl: './ogin.component.html',
  styleUrls: ['./ogin.component.css'],
})
export class OginComponent implements OnInit {
  formdata: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.formdata = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(5),
        ],
        
      ],
      email: ['', [Validators.required, Validators.email]],
      confirmpassword:['',Validators.required]
    },{Validator:Validation('password','confirmpassword')});
  }
  login() {
    this.route.navigate(['list']);
  }
  confirmPassword(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPassword: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
}
