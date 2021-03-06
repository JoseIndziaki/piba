import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';



@Component({
  selector: 'modal-login',
  templateUrl: 'modal-login.html'
})
export class ModalLoginPage {
  

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}