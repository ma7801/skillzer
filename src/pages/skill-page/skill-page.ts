import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

const MAXCARDS = 50;

@Component({
  selector: 'skill-page',
  templateUrl: 'skill-page.html'
})
export class SkillPage {
  operation: String;
  numberType: String;
  difficulty: number;
  cards: Array<any>;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.operation = navParams.get('operation');
    this.numberType = navParams.get('numberType');
    this.difficulty = navParams.get('difficulty');

    this.cards = [];
    this.initializeCards();
  }

  initializeCards() {
    let cardNum:number;
    let firstNum:number;
    let secondNum:number;
    let card: {String, number};
    let expression: String;
    let answer: number;

    for (cardNum=0; cardNum<MAXCARDS; cardNum++) {

      firstNum =  Math.round(Math.random() * this.difficulty + 3);
      secondNum =  Math.round(Math.random() * this.difficulty + 3);

      if(this.operation == "combine") {
        expression = firstNum + " + " + secondNum + " = ";
        answer = firstNum + secondNum;
        this.cards.push({expression, answer});
      }
      if (this.operation == "multiply") {
        expression = firstNum + "(" + secondNum + ") = ";
        answer = firstNum * secondNum;
        this.cards.push({expression, answer});
      }
    }
  }

}
