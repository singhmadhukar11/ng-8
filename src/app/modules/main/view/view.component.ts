import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor( private globalService:GlobalService) { }

columnDefs = [
        {headerName: 'Store Name', field: 'name', sortable: true, filter: true},
        {headerName: 'Address', field: 'address', sortable: true, filter: true},
        {headerName: 'Phone No', field: 'phone', sortable: true, filter: true},
        {headerName: 'Email', field: 'email', sortable: true, filter: true},
    ];

    rowData: any;

  onGridReady(params) {
    params.api.sizeColumnsToFit();
   }

  onRowClicked(event: any) {
   console.log('row', event);
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
