import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = 'akelius-code-challange';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
     // maintains user current login status.
    this.authService.autoLogin();
  }
}
