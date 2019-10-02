import { Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
// export interface type{
//     name:string;
//     icon:string;
//     color:string;
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'Angular-ie';
    // today = new Date();
    constructor(private router: Router) {}
    // sideNavmenus: type[] = [{
    //        name: 'map',
    //         icon: 'map',
    //         color: '#2E4053'
    //     },
    //     {
    //        name: 'mainModule',
    //         icon: 'person',
    //          color: '#148F77'
    //     },
    //     {
    //         name: 'order',
    //         icon: 'local_activity',
    //          color: '#8E44AD'
    //     },
    //     {
            
    //         name: 'admin',
    //         icon: 'person',
    //          color: '#B03A2E'
    //     }
    // ];

    // selectedIdx = 0;
    // label:any ;
    // icon:any ;
    // selectItem(index,menu):void {
    //     this.selectedIdx = index;
    //     this.label = menu.name;
    //     this.icon = menu.icon;
    // }


  ngOnInit() {
    this.router.navigate([''])
  }
}
