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

import { TicketScrathPage } from '../pages/ticket-scrath/ticket-scrath';
import { TicketSlotPage } from '../pages/ticket-slot/ticket-slot';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingDetailPage } from '../pages/setting-detail/setting-detail';
import { SettingPage } from '../pages/setting/setting';
import { ScrathGamePage } from '../pages/scrath-game/scrath-game';
import { TicketPage } from '../pages/ticket/ticket';
import { FruityGamePage } from '../pages/fruity-game/fruity-game';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AlarmPage,
    PocketMoneyPage,
    SettingPage,
    SettingDetailPage,
    TicketScrathPage,
    TicketSlotPage,
    TabsPage,
    ScrathGamePage,
    TicketPage,
    FruityGamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
    }
    )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AlarmPage,
    PocketMoneyPage,
    SettingPage,
    SettingDetailPage,
    TicketScrathPage,
    TicketSlotPage,
    TabsPage,
    ScrathGamePage,
    TicketPage,
    FruityGamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
