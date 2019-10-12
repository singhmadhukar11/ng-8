import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MainService } from '../main.service';
import { Routes, RouterModule, Router } from '@angular/router';
// import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-button-renderer',
  // template: `
  //   <button type="button" (click)="onClick($event)">1</button>
  //   `
// template: `<button mat-button color="primary" (click)="onClick($event)">Primary</button>`
template:`<button mat-icon-button  [matMenuTriggerFor]="menu">
    <mat-icon>more_vert</mat-icon>
  </button>
<mat-menu #menu="matMenu">
  <button mat-menu-item (click)="viewRow($event)">View</button>
  <button mat-menu-item (click)="deleteRow($event, index)">Delete</button>
</mat-menu>`

})

export class ButtonRendererComponent implements ICellRendererAngularComp {
   params;
   sendData = [];
  agInit(params): void {
    this.params = params;
  }
  constructor(private mainService:MainService, private router: Router){
  }

  refresh(params?: any): boolean {
    return true;
  }

  // onClick($event) {
    
  //   alert("Edited");
 
  // }
viewRow($events){
  this.sendData = this.params.data;
  this.mainService.shareRowdta = this.sendData;
  this.router.navigate(['/main/detail']);
}

  deleteRow($events, index){
     this.params;
     this.mainService.removeItem(this.params, index).subscribe(data => {
            alert('Success');
          })
     }
}


