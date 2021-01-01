import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NewUser } from 'src/app/models/newUser';
import { Config } from '../../../../shared/config/app.config';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  config = Config;
  loading = false;
  currentUsers: NewUser[];

  cRef = 'refId'; // dom refrence id for fonts resizing.

  constructor(private readonly viewService: ViewService, private users: UserService) { }

  ngOnInit(): void {

    this.loading = true;
    this.viewService.getAll().subscribe(data => {
      this.currentUsers = data;
      // adding new user from service to current users array emitted from the fake api.
      if (!!this.users.newUser) {
        this.currentUsers.unshift(this.users.newUser);
      }
      this.loading = false;
    })
  }

}