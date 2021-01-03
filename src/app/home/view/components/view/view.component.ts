import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { ViewService } from './view.service';

import { NewUser } from 'src/app/models/newUser.class';
import { Config } from '../../../../shared/config/app.config';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  config = Config.message; // config file loading text for component
  loading = false;
  currentUsers: NewUser[];

  constructor(
    private readonly viewService: ViewService,
    private readonly users: UserService) { }

  ngOnInit(): void {

    this.loading = true; // spinner
    
    this.viewService.getAll().subscribe(data => {
      this.currentUsers = data;

      // adding new user from service to current users array emitted from the fake api.
      if (!!this.users.newUser) {
        this.currentUsers.unshift(this.users.newUser); // unshift data to current user array.
        
        this.users.newUser = null; // trash the user service data to avoid repetition.
      }
      this.loading = false; // stop spinner
    })
  }

}