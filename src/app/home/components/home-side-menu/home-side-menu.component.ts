import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'home-side-menu',
  templateUrl: './home-side-menu.component.html',
  styleUrls: ['./home-side-menu.component.less']
})

export class HomeSideMenuComponent implements OnInit {
  config = Config;

  @Output() signOut = new EventEmitter<void>();
  @Input() isToggled: boolean; // side menu toggle
  @Input() currentUser: User; // current user

  constructor() {}

  ngOnInit(): void {
  }

  logout(): void {
    this.signOut.emit()
  }
}
