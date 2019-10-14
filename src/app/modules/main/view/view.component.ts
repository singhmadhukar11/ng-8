import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../global.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainService } from '../main.service';
import { ButtonRendererComponent } from './button-renderer.component';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor( private router: Router,private globalService:GlobalService, private mainService: MainService) { 
      this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }
frameworkComponents: any;
  sendData = [];
  private gridApi;
columnDefs = [
        {headerName: 'STORE NAME', field: 'name', sortable: true, filter: true},
        {headerName: 'ADDRESS', field: 'address', sortable: true, filter: true},
        {headerName: 'PHONE NO', field: 'phone', sortable: true, filter: true},
        {headerName: 'EMAIL', field: 'email', sortable: true, filter: true},
        {
            field: "ACTIONS", 
            width: 110, 
            cellRenderer: 'buttonRenderer'
        }
    ];

    rowData: any;
    
  onGridReady(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
   }

    deleteRow(event, index){
     this.mainService.removeItem(event, index).subscribe(data => {
            alert('Success');
          });
     }

 //  onRowClicked(event: any, index) {
 //   console.log('row', event);
 //   this.deleteRow(event, index);
 //    this.sendData = event.data;
 //    this.mainService.shareRowdta = this.sendData;
 //    this.router.navigate(['/main/detail']);
 // }

refreshGrid(){
     // params.api.setRowData(this.rowData); // Refresh grid
     // this.router.navigate(['/main/view']);
      // this.gridApi.refreshCells();
// this.gridApi.setRowData(this.rowData);
this.rowData;
}
onRowClicked(){
  console.log("Row Clicked");
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
