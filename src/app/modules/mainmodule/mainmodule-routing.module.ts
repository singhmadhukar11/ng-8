import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmoduleComponent } from './mainmodule.component';

const routes: Routes = [{ path: '', component: MainmoduleComponent },
 // { path: 'order', loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule) },
 // { path: 'map', loadChildren: () => import('../map/map.module').then(m => m.MapModule) }, 
 // { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
 // { path: '', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainmoduleRoutingModule { }
