import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public nav: NavController
  ) { }

  ngOnInit() {
  }

  navegar(path: string) {
    this.nav.navigateForward(path)
  }

}
