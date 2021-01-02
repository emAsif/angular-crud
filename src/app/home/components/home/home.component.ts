import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services';
import { User } from 'src/app/core/auth/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  private userSub: Subscription; // current user subscricption

  currentUser: User;
  isToggled: boolean = false; // hide side nav by default

  constructor(private readonly authService: AuthenticationService) { }

  ngOnInit(): void {
    // subscription to current user.
    this.userSub = this.authService.user.subscribe(user => this.currentUser = user);
  }

  // side nav toggle
  toggled(isToggled: boolean): void {
    this.isToggled = isToggled;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
