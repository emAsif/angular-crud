import { Component, OnInit } from '@angular/core';
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
  currentUser: User;
  items: {name: string, routerLink: string}[] = [
    { name: 'Home', routerLink: '/home/start'},
    { name: 'View User', routerLink: '/home/view'},
    { name: 'Create User', routerLink: '/home/create'}
  ]
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) {}

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);  
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
