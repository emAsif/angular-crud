import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user';

declare const openNavHandler: any;
declare const closeNavHandler: any;

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.less']
})
export class HomeHeaderComponent implements OnInit {
  @Input() currentUser: User;

  showCloseIcon = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  openNav() {
    this.showCloseIcon = true;
    openNavHandler();
  }

  closeNav() {
    this.showCloseIcon = false;
    closeNavHandler();
  }
}
