import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm = this.fb.group({
    userId: [''],
    passWord: ['']
  });
constructor(private router: Router, private _snackBar: MatSnackBar, private fb: FormBuilder) { }
submit(){
	// console.log(this.loginForm.value);
	// this.router.navigate(['/main']);
	if(this.loginForm.value.userId=="admin" && this.loginForm.value.passWord=="admin"){
		this.router.navigate(['/main']);
	}else if(this.loginForm.value.userId=="user" && this.loginForm.value.passWord=="user"){
		this.router.navigate(['/main']);
	}else{
		this._snackBar.open('Invalid Details', '', {
  			duration: 1000,
		});
	}
}
  ngOnInit() {
  }

}
