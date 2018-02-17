import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenu {
  menuItems = [];

  constructor(public navCtrl: NavController) {
    this.menuItems = ['Menu Item 1', 'Menu Item 2'];

  }

}
