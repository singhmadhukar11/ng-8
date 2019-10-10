import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
lng:any;
lat:any;
constructor(private mainService : MainService) {
if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
   }}

   Submit(lat) {
  this.mainService.createItem(lat).subscribe(
    response => console.log(response),
    err => console.log(err)
  );
}

  ngOnInit() {
  }

}
