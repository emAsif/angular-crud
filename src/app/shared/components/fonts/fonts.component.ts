import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../config/app.config'

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.less']
})
export class FontsComponent implements OnInit {
  @Input() state; // current dom refrence id

  config = Config;
  
  // loaded from config.ts file
  sizes = [this.config.fonts.fSmall, this.config.fonts.fMedium, this.config.fonts.fLarge];

  constructor() { }

  ngOnInit(): void {
  }

  fontResize(value: string): void {
    switch (value) {
      case this.config.fonts.fSmall:
        document.getElementById(this.state).style.fontSize = this.config.fonts.small;
        break;

      case this.config.fonts.fMedium:
        document.getElementById(this.state).style.fontSize = this.config.fonts.medium;
        break;

      case this.config.fonts.fLarge:
        document.getElementById(this.state).style.fontSize = this.config.fonts.large;
        break

      default:
        console.log("Error: dom refrence Id's needs to be same. something went wrong");
    }
  }
}
