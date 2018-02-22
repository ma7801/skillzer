import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppSettings } from '../../app/app-settings'


@Component({
  selector: 'skill-page',
  templateUrl: 'skill-page.html'
})
export class SkillPage implements OnInit {
  operation: String;
  numberType: String;
  difficulty: number;
  cards: Array<any>;
  stars: Array<any>;

  curCardNum: number;
  userAnswer: number;
  //countdownBarWidth: number;
  secondsPerHalfStar: number;
  curHalfStars: number;
  starsEarned: number;

  //debug:
  dummy: number;

  //debug:
  keyupTriggered: number;

  constructor(public navCtrl: NavController, private navParams: NavParams, public appSettings: AppSettings) {
    this.operation = navParams.get('operation');
    this.numberType = navParams.get('numberType');
    this.difficulty = navParams.get('difficulty');
  }

  ngOnInit() {
    //this.countdownBarWidth = this.appSettings.starWidth * this.difficulty;  // i.e. star width * # of stars
    this.cards = [];
    
    this.curCardNum = 0;
    this.secondsPerHalfStar = this.appSettings.secondsPerProblem / (this.difficulty * 2);
    this.starsEarned = 0.0;

     // Fill the stars array
    this.initializeStars();

    this.keyupTriggered = 0; //debug
    this.initializeCards();

    this.countDown();

  }

  initializeStars() {
    this.stars = [];
    this.curHalfStars = this.difficulty * 2;
    
    for (let i=0; i<this.difficulty; i++) {
      this.stars.push({
        'id':'star'+i,
        'curIosStar': 'ios-star',
        'curMdStar': 'md-star'
      });
    }
  }

  initializeCards() {
    let cardNum:number;
    let firstNum:number;
    let secondNum:number;
    let card: {String, number};
    let expression: String;
    let answer: number;

    for (cardNum=0; cardNum<this.appSettings.maxCards; cardNum++) {

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

  checkAnswer() {
    this.keyupTriggered++; //debug

    if (this.userAnswer == this.cards[this.curCardNum].answer) {
      // Add stars to stars earned
      this.starsEarned = this.starsEarned + (this.curHalfStars / 2) + 0.5;

      // Advance card
      this.curCardNum++;

      // Clear number input
      this.userAnswer = NaN;

      // Reset stars
      this.initializeStars();
    }
  }

  countDown() {
    setInterval (() => {
      window.scrollTo(0,0);

      if (this.curHalfStars < (this.difficulty * 2)) {  // Skip first iteration
        if (this.curHalfStars == 0) {  // If stars/time has elapsed
          // Advance to next card and reset
          //this.curHalfStars = this.difficulty * 2;
          this.curCardNum++;
          this.userAnswer = NaN;
          this.initializeStars();

        }
        else if (this.curHalfStars % 2 != 0)  {// If odd, i.e. there will now be a half-star present
          //Set the ending star to be a half-star
          this.stars[Math.round(this.curHalfStars/2)-1].curIosStar = 'ios-star-half';
          this.stars[Math.round(this.curHalfStars/2)-1].curMdStar = 'md-star-half';
        }
        else {
          // Remove the ending star completely
          this.stars[this.curHalfStars/2].curIosStar = 'ios-star-outline';
          this.stars[this.curHalfStars/2].curMdStar = 'md-star-outline';
        }
      }
      console.log(this.curHalfStars);
      this.curHalfStars--;
      
    }, this.secondsPerHalfStar * 1000);
    
  }
  /*
  countDownBarStyle(): String {
    return `
    {'background-color':'green', 'height':'20px'}
    `;
  }
  */

}
