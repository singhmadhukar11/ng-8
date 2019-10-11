import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MainService } from '../main.service';
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
  <button mat-menu-item (click)="onClick($event)">Edit</button>
  <button mat-menu-item (click)="deleteRow($event, index)">Delete</button>
</mat-menu>`

})

export class ButtonRendererComponent implements ICellRendererAngularComp {
   params;

  agInit(params): void {
    this.params = params;
  }
  constructor(private mainService:MainService){

  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    
    alert("Edited");
    
  }

  deleteRow(params, index){
     this.mainService.removeItem(params, index).subscribe(data => {
            alert('Success');
          })
     }
}