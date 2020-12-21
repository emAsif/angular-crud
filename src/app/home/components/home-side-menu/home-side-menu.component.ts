import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services';
import { User } from 'src/app/models/user';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'home-side-menu',
  templateUrl: './home-side-menu.component.html',
  styleUrls: ['./home-side-menu.component.less']
})
export class HomeSideMenuComponent implements OnInit {
  logoText = Config.message.loginText;
  @Output() signOut = new EventEmitter<void>();

  items: {name: string, routerLink: string}[] = [
    { name: 'Home', routerLink: '/home/start'},
    { name: 'View User', routerLink: '/home/view'},
    { name: 'Create User', routerLink: '/home/create'}
  ]

  constructor() {}

  ngOnInit(): void {

  }

  logout() {
    this.signOut.emit()
  }
}
