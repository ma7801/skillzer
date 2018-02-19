import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { MyApp } from '../../app/app.component';

@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenu {

  skills: any[] = [
    {title: "Multiplication Table Practice", component: "TwoNumberSkill", operation:"multiply", numberType:"natural"},
    {title: "Combining +/- Numbers", component: "TwoNumberSkill", operation:"combine", numberType:"integer"},
    {title: "Dividing Practice", component:"TwoNumberSkill", operation: "divide", numberType:"natural"}

  ];

  constructor(public navCtrl: NavController) {

  }

  openPage(p) {
    this.navCtrl.push(p);
  }

}
