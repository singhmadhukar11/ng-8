import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MainService } from '../main.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { ViewComponent } from './view.component';
@Component({
  selector: 'app-button-renderer',
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
  constructor(private mainService:MainService, private router: Router, private viewComponent : ViewComponent){
  }

  refresh(params?: any): boolean {
    return true;
  }

viewRow($events){
  this.sendData = this.params.data;
  this.mainService.shareRowdta = this.sendData;
  this.router.navigate(['/main/detail']);
}

  deleteRow($events, index, data){
     this.params;
     this.mainService.removeItem(this.params, index).subscribe(data => {
            alert('Success');
          });
     this.viewComponent.deleteRow(index, data);
     }
}


