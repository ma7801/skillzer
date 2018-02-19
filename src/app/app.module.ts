import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainMenu } from '../pages/main-menu/main-menu';
import { TwoNumberSkill } from '../pages/two-number-skill/two-number-skill';
import { SkillPage } from '../pages/skill-page/skill-page';

@NgModule({
  declarations: [
    MyApp,
    MainMenu,
    TwoNumberSkill,
    SkillPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainMenu,
    TwoNumberSkill,
    SkillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
