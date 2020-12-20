import { Component, OnInit } from '@angular/core';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'home-side-menu',
  templateUrl: './home-side-menu.component.html',
  styleUrls: ['./home-side-menu.component.less']
})
export class HomeSideMenuComponent implements OnInit {
  logoText = Config.message.loginText;
  items = [
    { name: 'Home', url: '#'},
    { name: 'View User', url: '#'},
    { name: 'Create User', url: '#'},
    { name: 'Logout', url: '#'},
  ]
  constructor() { }

  ngOnInit(): void {

  }
}
