import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { Router} from '@angular/router';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(private router : Router) { }
options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 5,
    center: latLng([ 20.5937, 78.9629 ])
  };
backBtn(){
  this.router.navigate(["/view"]);
}

  ngOnInit() {
  }

}
