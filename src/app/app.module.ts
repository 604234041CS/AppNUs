import { MovieAppPage } from './../pages/movie-app/movie-app';
import {HttpClientModule} from '@angular/common/http/';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { BatteryStatusPage } from './../pages/battery-status/battery-status';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarcodePage } from './../pages/barcode/barcode';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SMS } from '@ionic-native/sms/ngx';
import { Flashlight } from '@ionic-native/flashlight';
import { BatteryStatus } from '@ionic-native/battery-status';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,LoginPage,BarcodePage,FlashlightPage,BatteryStatusPage,JsonMenuPage,
    MovieAppPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,LoginPage,BarcodePage,FlashlightPage,BatteryStatusPage,JsonMenuPage,
  MovieAppPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Flashlight,BatteryStatus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
