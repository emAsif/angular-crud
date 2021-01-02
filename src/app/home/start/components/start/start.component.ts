import { Component, OnInit } from '@angular/core';
import { Config } from '../../../../shared/config/app.config';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {
  config = Config.message; // retrieving text for the component.
  
  cId = 'sFont'; // DO NOT CHANGE - this as it is refrence for the fontsize updates.

  constructor() { }

  ngOnInit(): void {

  }

}
