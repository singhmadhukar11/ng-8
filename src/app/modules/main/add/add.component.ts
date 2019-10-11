import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
lng:any;
lat:any;

 profileForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required]
  });

constructor(private mainService : MainService, private fb: FormBuilder) {
if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
   }}

   onSubmit() {
  console.log(this.profileForm.value);
  this.mainService.createItem(this.profileForm.value).subscribe(
    response => console.log(response),
    err => console.log(err)
  );
  
}
// updateName() {
//     this.name.setValue('Nancy');
//   }
   // Submit(lat) {
  // this.mainService.createItem(lat).subscribe(
  //   response => console.log(response),
  //   err => console.log(err)
  // );
// }

  ngOnInit() {
  }

}
