import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {

  }
  back(){
    this.navCtrl.push(LoginPage);
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
