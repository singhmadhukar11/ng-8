import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { latLng, tileLayer, marker } from 'leaflet';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private mainService: MainService) { }
options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Madhukar'
      }),
      marker([ this.mainService.shareRowdta.lat, this.mainService.shareRowdta.lon ])
    ],
    zoom: 5,
    center: latLng([ this.mainService.shareRowdta.lat, this.mainService.shareRowdta.lon ])
  };


  ngOnInit() {
  	this.mainService.shareRowdta;
  }

}
