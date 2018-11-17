import {Component} from '@angular/core';
import {NavController, PopoverController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

import {NotificationsPage} from '../notifications/notifications';
import {SettingsPage} from '../settings/settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Rio de Janeiro, Brazil"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }
  doSearch() {
   // this.nav.push(TripsPage);
  }

  // choose place
  choosePlace(from) {
    //this.nav.push(SearchLocationPage, from);
  }

  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}