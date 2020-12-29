import { Component, OnInit } from '@angular/core';
import { Config } from '../../../../shared/config/app.config';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  config = Config;

  cRef = 'refId'; // dom refrence id for fonts resizing.


  ngOnInit(): void {
    

  }

}