import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../global.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainService } from '../main.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor( private router: Router,private globalService:GlobalService, private mainService: MainService) { }

  sendData = [];

columnDefs = [
        {headerName: 'STORE NAME', field: 'name', sortable: true, filter: true},
        {headerName: 'ADDRESS', field: 'address', sortable: true, filter: true},
        {headerName: 'PHONE NO', field: 'phone', sortable: true, filter: true},
        {headerName: 'EMAIL', field: 'email', sortable: true, filter: true},
    ];

    rowData: any;

  onGridReady(params) {
    params.api.sizeColumnsToFit();
   }

  onRowClicked(event: any) {
   console.log('row', event);
    this.sendData = event.data;
    this.mainService.shareRowdta = this.sendData;
    this.router.navigate(['/main/detail']);
 }
usersData :any = [];
getAllStudents() {
    this.globalService.getList().subscribe(response => {
      // console.log(response);
      this.rowData = response;
    })
  }
ngOnInit() {
  this.getAllStudents();
  // this.rowData = this.http.get(this.mainservice.gridUrl);
}
}
