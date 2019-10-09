import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { DetailComponent } from './detail/detail.component';




const routes: Routes = [
	{ path: '', component: MainComponent,
children: [
      { path: 'add', component: AddComponent },
	  { path: 'view', component: ViewComponent },
	  { path: 'map', component: MapViewComponent },
 	  { path: 'detail', component: DetailComponent },
	  { path: '', component: ViewComponent},
    ]
 },
	  { path: 'view', component: ViewComponent },
	  { path: 'logout', loadChildren: () => import('../../login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
