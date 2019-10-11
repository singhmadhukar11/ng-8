import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../../library/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ButtonRendererComponent } from './view/button-renderer.component';


@NgModule({
  declarations: [
  MainComponent,
  AddComponent,
  ViewComponent,
  MapViewComponent,
  DetailComponent,
  ButtonRendererComponent
  ],
  entryComponents: [ButtonRendererComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    AgGridModule.withComponents([]),
    LeafletModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
