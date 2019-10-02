import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', loadChildren: () => import('./mainmodule/mainmodule.module').then(m => m.MainmoduleModule) },
 { path: 'order', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
 { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) }, 
 { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
