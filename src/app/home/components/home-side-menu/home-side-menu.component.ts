import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/auth/user.model';
import { AuthenticationService } from 'src/app/core/services';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'home-side-menu',
  templateUrl: './home-side-menu.component.html',
  styleUrls: ['./home-side-menu.component.less']
})

export class HomeSideMenuComponent implements OnInit {
  config = Config;

  @Input() isToggled: boolean; // side menu toggle
  @Input() currentUser: User; // current user

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
  }

  // application sign out
  logout(): void {
    this.authenticationService.logout();
  }
}
