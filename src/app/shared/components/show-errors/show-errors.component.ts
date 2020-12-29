import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.less']
})
export class ShowErrorsComponent implements OnInit {

  @Input() ctrl: FormControl;

  ERROR_MESSAGE = {
    required: () => `This field is required`,
    minlength: (par) => `Min ${par.requiredLength} chars is required`,
    maxlength: (par) => `Max ${par.requiredLength} chars are allowed`,
    cannotContainSpace: () => `Space is not allowed for Username`,
  };

  constructor() { }

  ngOnInit() { }

  shouldShowErrors(): boolean {
    return this.ctrl && this.ctrl.errors && this.ctrl.touched;
  }

  listOfErrors(): string[] {
    return Object.keys(this.ctrl.errors).map(
      err => this.ERROR_MESSAGE[err](this.ctrl.getError(err))
    );
  }


}
