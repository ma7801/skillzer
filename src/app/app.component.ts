import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainMenu } from '../pages/main-menu/main-menu';
import { TwoNumberSkill } from '../pages/two-number-skill/two-number-skill';
import { SkillOptions } from '../pages/skill-options/skill-options';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MainMenu;
  
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  

  }



 
}

