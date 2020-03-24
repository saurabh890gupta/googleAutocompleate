import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare var google:any
@Component({
  selector: 'app-homemap',
  templateUrl: './homemap.component.html',
  styleUrls: ['./homemap.component.css']
})
export class HomemapComponent implements OnInit {
  address :any
  web_site:any
  name:any
  zip_code:any
  @ViewChild('search') searchElementRef: ElementRef;
  latitude: number;
  longitude: number;
zoom: number;
  constructor(
   private mapsAPILoader:MapsAPILoader,
   private ngZone:NgZone
  ) {}
  
  ngOnInit() {
    //set google maps defaults
    this.setCurrentPosition()
  }

  ngAfterViewInit() {
    this.findAdress()
  }

  findAdress(){
    this.mapsAPILoader.load().then(() => {
         let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
         autocomplete.addListener("place_changed", () => {
           this.ngZone.run(() => {
             // some details
             let place = autocomplete.getPlace();
             this.address = place.formatted_address;
             this.web_site = place.website;
             this.name = place.name;
             this.zip_code = place.address_components[place.address_components.length - 1].long_name;
             //set latitude, longitude and zoom
             this.latitude = place.geometry.location.lat();
             this.longitude = place.geometry.location.lng();
             this.zoom = 12;
           });
         });
       });
   }



private setCurrentPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(position)
      this.zoom = 12;
    });
  }
}

}
