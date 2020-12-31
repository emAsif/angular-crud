import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CreateService } from 'src/app/home/create/components/create/create.service';
import { User } from 'src/app/models/user';
import { Config } from '../../../../shared/config/app.config';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  config = Config;
  loading = false;
  appUsers: any;
  
  cRef = 'refId'; // dom refrence id for fonts resizing.

  constructor(private readonly users: UserService) { }

  ngOnInit(): void {
      this.loading = true;
      this.appUsers = this.users.getAll();
      this.loading = false;

  //   this.http.get<User>('http://localhost:4000/users').subscribe(data => {  

  //     this.users = data;
  //     this.loading = false;
  //   console.log(this.users)
  // })
  }

}