import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-explore-neighbourhood',
  templateUrl: 'explore-neighbourhood.html',
})
export class ExploreNeighbourhoodPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation, private patform: Platform) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(): any {
  this.patform.ready().then(()=>{
    // let options = {
    //   timeout: 30000,
    //   enableHighAccuracy: true
    //   };
      this.geolocation.getCurrentPosition().then((position) => {
         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

     }, (err) => {
       alert(err.message);
     });
    });
  }

  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>Information!</h4>";
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker: any, content: string): any {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}
