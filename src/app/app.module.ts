import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';

import { DuBaApp } from './app.component';

import { HomePage } from '../pages/home/home';


@NgModule({
  declarations: [
    DuBaApp,
    HomePage,
  ],
  imports: [
    IonicModule.forRoot(DuBaApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DuBaApp,
    HomePage,
  ],
  providers: []
})
export class AppModule { }
