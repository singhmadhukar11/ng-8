import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmoduleComponent } from './mainmodule.component';

const routes: Routes = [{ path: '', component: MainmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
