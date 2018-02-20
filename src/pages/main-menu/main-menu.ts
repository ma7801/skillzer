import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwoNumberSkill } from '../two-number-skill/two-number-skill';

//import { MyApp } from '../../app/app.component';

@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenu {

  skills: Array<{title: String, component: any, operation: String, numberType: String}>;

  //skills: any[];
  /* = [
    {title: "Multiplication Table Practice", component: "TwoNumberSkill", operation:"multiply", numberType:"natural"},
    {title: "Combining +/- Numbers", component: "TwoNumberSkill", operation:"combine", numberType:"integer"},
    {title: "Dividing Practice", component:"TwoNumberSkill", operation: "divide", numberType:"natural"}

  ];
*/

  constructor(public navCtrl: NavController) {
    this.skills = [
      {title: "Multiplication Table Practice", component: TwoNumberSkill, operation:"multiply", numberType:"natural"},
      {title: "Combining +/- Numbers", component: TwoNumberSkill, operation:"combine", numberType:"integer"},
      {title: "Dividing Practice", component:TwoNumberSkill, operation: "divide", numberType:"natural"}
    ];
  }

  openSkill(skill) {
    this.navCtrl.push(skill.component, {
      operation: skill.operation,
      numberType: skill.numberType
    });
  }

}
