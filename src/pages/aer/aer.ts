import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http/';
/**
 * Generated class for the AerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aer',
  templateUrl: 'aer.html',
})
export class AerPage {
  gameAr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getAr();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AerPage');
  }
  getAr() {
    let url = 'http://localhost/shop/getAllGames_7.php';
    this.http.get(url).subscribe(
      (data: any) => {
        console.log(data);
        this.gameAr = data.games
      }
      , (error) => {
        console.log(error);
      }
    );
  }

}
