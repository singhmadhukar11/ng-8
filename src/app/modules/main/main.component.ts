import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
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
  constructor(private router: Router, private mainservice: MainService, private http: HttpClient) {}
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

columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true},
        {headerName: 'Model', field: 'model', sortable: true, filter: true},
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];

    rowData: any;

  onGridReady(params) {
    params.api.sizeColumnsToFit();
   }

ngOnInit() {
  this.rowData = this.http.get(this.mainservice.gridUrl);
}
}
