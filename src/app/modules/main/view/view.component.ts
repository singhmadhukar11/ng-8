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
