import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private router: Router, private _snackBar: MatSnackBar) { }
submit(userId, passWord){
	// this.router.navigate(['/main']);
	if(userId=="admin" && passWord=="admin"){
		this.router.navigate(['/main']);
	}else if(userId=="user" && passWord=="user"){
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
