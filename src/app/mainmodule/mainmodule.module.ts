import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MainmoduleComponent } from './mainmodule.component';


@NgModule({
  declarations: [MainmoduleComponent],
  imports: [
    CommonModule,
    MainmoduleRoutingModule
  ]
})
export class MainmoduleModule { }
