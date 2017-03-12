import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.template.html'
})


export class DuBaApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(
  ) {
  }

}
