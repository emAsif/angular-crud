import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/auth/user.model';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.less']
})
export class HomeHeaderComponent implements OnInit {
  @Input() currentUser: User; //current user data

  @Output() toggled = new EventEmitter<boolean>();

  // to see the side menu slide out by default set it to true
  isToggled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //to Load the side menu by default uncomment this line an set the isToggled property to true.

    // this.toggled.emit(this.isToggled);
  }
  
  toggle(): void {
    this.isToggled = !this.isToggled;
    
    this.toggled.emit(this.isToggled); // emit toggle menu boolean
  }
}
