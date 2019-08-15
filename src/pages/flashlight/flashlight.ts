import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
/**
 * Generated class for the FlashlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {
  isOn = false;

  constructor(public navCtrl: NavController,public navParams: NavParams,private flashlight: Flashlight) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashlightPage');
  }
  onTorch(){
    if(this.flashlight.available()){
      this.isOn = false;
      this.flashlight.switchOn();
    }else{
      alert("Flashlight Not Available");
    }
  }
  offTorch(){
    this.isOn = true;
    this.flashlight.switchOff();
  }
  
}
