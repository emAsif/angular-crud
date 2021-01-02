import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../config/app.config'

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.less']
})
export class FontsComponent implements OnInit {
  @Input() state; // current dom refrence id

  config = Config.fonts;

  // loaded from config.ts file
  sizes = [this.config.fSmall, this.config.fMedium, this.config.fLarge];

  constructor() { }

  ngOnInit(): void {
  }

  fontResize(value: string): void {
    switch (value) {
      case this.config.fSmall:
        document.getElementById(this.state).style.fontSize = this.config.small;
        break;

      case this.config.fMedium:
        document.getElementById(this.state).style.fontSize = this.config.medium;
        break;

      case this.config.fLarge:
        document.getElementById(this.state).style.fontSize = this.config.large;
        break

      default:
        console.log("Error: dom refrence Id's needs to be same. something went wrong");
    }
  }
}
