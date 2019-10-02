import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MainmoduleComponent } from './mainmodule.component';
import { MaterialModule } from '../../library/material.module';


@NgModule({
  declarations: [MainmoduleComponent],
  imports: [
    CommonModule,
    MainmoduleRoutingModule,
    MaterialModule
  ]
})
export class MainmoduleModule { }
