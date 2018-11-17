import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from '../services/activity-service';
import {TripService} from '../services/trip-service';
import {WeatherProvider} from '../services/weather';

import {GymJaoApp} from './app.component';

import {SettingsPage} from '../pages/settings/settings';
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from '../pages/notifications/notifications';
import {RegisterPage} from '../pages/register/register';
import {ExploreNeighbourhoodPage} from '../pages/explore-neighbourhood/explore-neighbourhood';

@NgModule({
  declarations: [
    GymJaoApp,
    SettingsPage,
    HomePage,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    ExploreNeighbourhoodPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(GymJaoApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GymJaoApp,
    SettingsPage,
    HomePage,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    ExploreNeighbourhoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider
  ]
})

export class AppModule {
}
