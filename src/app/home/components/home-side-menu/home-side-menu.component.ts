import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'home-side-menu',
  templateUrl: './home-side-menu.component.html',
  styleUrls: ['./home-side-menu.component.less']
})

export class HomeSideMenuComponent implements OnInit {
  @Output() signOut = new EventEmitter<void>();
  @Input() isToggled: boolean;

  logoText = Config.message.loginText;

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

  // toggled(isToggled: boolean) {
  //   this.isToggled = isToggled;
  // }
}
