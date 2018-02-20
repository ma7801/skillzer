import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SkillPage } from '../skill-page/skill-page';

@Component({
  selector: 'two-number-skill',
  templateUrl: './two-number-skill.html'
})
export class TwoNumberSkill {
  operation: String;
  numberType: String;
  difficulty: Number;
  

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.operation = navParams.get('operation');
    this.numberType = navParams.get('numberType');
    this.difficulty = 3;
  }

  startSkill() {
    this.navCtrl.push(SkillPage, {
      operation: this.operation,
      numberType: this.numberType,
      difficulty: this.difficulty
    });  
  }

}
