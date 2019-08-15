import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contacArray =    [{name: 'Nus', telephone: '0808794112', imageUrl: 'assets/imgs/mo.jpg'},
                    {name: 'Torres', telephone: '0935951819', imageUrl: 'assets/imgs/to.jpg'},
                    {name: 'Alisson', telephone: '0864845806', imageUrl: 'assets/imgs/Alisson2018.jpg'},
                    {name: 'Van dijk', telephone: '0916466030', imageUrl: 'assets/imgs/van.jpg'},
                    {name: 'Arnold', telephone: '0822836624', imageUrl: 'assets/imgs/ar.JPG'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}//enD
