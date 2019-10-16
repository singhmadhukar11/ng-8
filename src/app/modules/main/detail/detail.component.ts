import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { latLng, tileLayer, marker } from 'leaflet';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private mainService: MainService) {  }

      // lat: any = this.mainService.shareRowdta.lat;
      // lon: any = this.mainService.shareRowdta.lon;
      lat = 20.5937;
      lon = 78.9629;

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      marker([ this.lat, this.lon ])
    ],
    zoom: 10,
    center: latLng([ this.lat, this.lon  ])
  };

  ngOnInit() {
  	this.mainService.shareRowdta;
  }

}
