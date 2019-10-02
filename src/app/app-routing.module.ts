import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 // { path: '', loadChildren: () => import('./modules/mainmodule/mainmodule.module').then(m => m.MainmoduleModule) },
 { path: 'mainModule', loadChildren: () => import('./modules/mainmodule/mainmodule.module').then(m => m.MainmoduleModule) },
 // { path: 'order', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule) },
 // { path: 'map', loadChildren: () => import('./modules/map/map.module').then(m => m.MapModule) }, 
 // { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
 { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
