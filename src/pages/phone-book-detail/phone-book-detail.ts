import { SMS } from '@ionic-native/sms/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {
  
  contect = {name:'',telephone:'', imagUrl: ''};

  constructor(public navCtrl: NavController, public navP: NavParams,private SMS: SMS ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contect = this.navP.data
    console.log(this.contect);

  }
  call(){
    alert("call");
    window.open('tel:'+this.contect.telephone);
  }
  sms(){
    alert("sms");
    this.SMS.send(this.contect.telephone, 'Hello world!');
  }
  
}//ENDDD
