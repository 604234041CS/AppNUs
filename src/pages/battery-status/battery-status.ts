import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';
/**
 * Generated class for the BatteryStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battery-status',
  templateUrl: 'battery-status.html',
})
export class BatteryStatusPage {
  batterySubscription : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private batteryStatus: BatteryStatus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatteryStatusPage');
  }
  checkBattery(){
    // watch change in battery status
    this.batterySubscription = this.batteryStatus.onChange().subscribe(status => {
      console.log(status.level, status.isPlugged);
    });
  }
 
  stopBatteryCheck(){
    this.batterySubscription.unsubscribe();
  }
}
