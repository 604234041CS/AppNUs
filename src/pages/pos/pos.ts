import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http/';

/**
 * Generated class for the PosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pos',
  templateUrl: 'pos.html',
})
export class PosPage {
  returnMsg = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosPage');
  }
  PosJsonData(_name, _surname, _email) {
    let jsonData;
    jsonData = {
      name: _name,
      surname: _surname,
      email: _email
    };
    console.log(jsonData);
    let url = 'http://localhost/shop/ion-post-json-object.php';
    this.http.post(url,jsonData).subscribe(
      (data: any) => {
        this.returnMsg = data.message;
      }
    );
  }
}//en
