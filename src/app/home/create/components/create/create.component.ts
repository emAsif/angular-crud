import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UsernameValidators } from 'src/app/shared/validators/username.validators';
import { Config } from '../../../../shared/config/app.config';
import { NewUser } from 'src/app/models/newUser.class';
import { CreateService } from './create.service';
import { UserService } from 'src/app/services/user.service';

interface msg {
  status: string;
  message: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})

export class CreateComponent implements OnInit {
  config = Config.message; // config file loading text for the component

  rf: FormGroup;
  loading: boolean = false;

  // displaying messages based on current status- by default info message will be loaded.
  msg: msg = { status: 'info', message: this.config.creatInfoMsg };

  constructor(
    private readonly _router: Router,
    private readonly userService: UserService,
    private readonly createService: CreateService,
    private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // form builder
    this.buidForm();
  }

  buidForm(): void {
    this.rf = this.formBuilder.group({
      firstName: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      lastName: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      username: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          UsernameValidators.cannotContainSpace // custom validator for space
        ]
      ],
      birthday: ['',
        [
          Validators.required
        ]
      ],
      address: [''] // address is optional.
    });
  }

  // navigate to view page
  redirect(): void {
    // five seconds timeout
    setTimeout(() => {
      this._router.navigateByUrl('/home/users');
    }, 4000);
  }

  // submit form 
  onSubmit(data: NewUser): void {
    // stop invalid form submission.
    if (!this.rf.valid) {
      return;
    }

    this.loading = true; // start spinner
    this.createService.create(data).subscribe(data => { // not using fake api response to avoid unexpected error
      
      this.userService.newUser = data; // saving new user to the service

      this.redirect(); // navigate to view page
      this.rf.reset(); // reseting form fields

      this.msg.status = 'success';
      this.msg.message = this.config.createSuccessMsg;

      this.loading = false // stop spinner

    },
      error => {
        this.loading = false;

        this.rf.reset();
        this.msg.status = 'error';
        this.msg.message = error + this.config.creatCusErr; // concat custom msg with default msg receiving.
      }
    )
  }

  // reset form values
  resetForm(event): void {
    event.preventDefault() // prevent default behaviour.
    this.rf.reset(); // reset form fields
  }

}
