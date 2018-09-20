import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AlarmPage } from '../pages/alarm/alarm';
import { PocketMoneyPage } from '../pages/pocket-money/pocket-money';
import { SettingPage } from '../pages/setting/setting';
import { TicketScrathPage } from '../pages/ticket-scrath/ticket-scrath';
import { TicketSlotPage } from '../pages/ticket-slot/ticket-slot';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AlarmPage,
    PocketMoneyPage,
    SettingPage,
    TicketScrathPage,
    TicketSlotPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AlarmPage,
    PocketMoneyPage,
    SettingPage,
    TicketScrathPage,
    TicketSlotPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
