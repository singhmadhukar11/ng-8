import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../global.service';
import {MatSnackBar} from '@angular/material/snack-bar';
export interface type{
  name:string;
  icon:string;
  color:string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Angular-ie';
  today = new Date();
  constructor(private router: Router, private mainservice: MainService, private http: HttpClient, private globalService:GlobalService, private _snackBar: MatSnackBar) {}
  mainMenu: type[] = [{
          name: 'home',
          icon: 'home',
          color: '#8E44AD'
      }
  ];

  selectedIdx = 0;
  label:any = 'home';
  icon:any = 'home';
  selectItem(index,menu):void {
      this.selectedIdx = index;
      this.label = menu.name;
      this.icon = menu.icon;
  }

  logOut(){
    // this.router.navigate(['/logout']);
    this._snackBar.open('LogOut Successfully', '', {
        duration: 1000,
    });
  }

// columnDefs = [
//         {headerName: 'Store Name', field: 'name', sortable: true, filter: true},
//         {headerName: 'Address', field: 'address', sortable: true, filter: true},
//         {headerName: 'Phone No', field: 'phone', sortable: true, filter: true},
//         {headerName: 'Email', field: 'email', sortable: true, filter: true},
//     ];

//     rowData: any;

//   onGridReady(params) {
//     params.api.sizeColumnsToFit();
//    }

//   onRowClicked(event: any) {
//    console.log('row', event);
//  }
// usersData :any = [];
// getAllStudents() {
//     this.globalService.getList().subscribe(response => {
//       this.rowData = response;
//     })
//   }
ngOnInit() {
  // this.getAllStudents();
  // this.rowData = this.http.get(this.mainservice.gridUrl);
}
}
