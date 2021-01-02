import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services';
import { UsernameValidators } from '../../../shared/validators/username.validators';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  config = Config.message;
  loginForm: FormGroup;

  loading = false;
  // returnUrl: string;
  error: boolean;
  msg: string = this.config.loginInfoMsg;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.formBuilder();
  }
  // form builder
  formBuilder(): void {
    this.loginForm = this.fb.group({
      username: ['',
        [
          Validators.required,
          // Validators.minLength(4),
          // Validators.maxLength(20),
          UsernameValidators.cannotContainSpace
        ]
      ],
      password: ['',
        [
          Validators.required,
          // Validators.minLength(4),
          // Validators.maxLength(20)
        ]
      ]
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (!this.loginForm.valid) {
      return;
    }

    // accessing input form values
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    // reseting the info message incase of retrying
    this.error = false;
    this.msg = this.config.loginInfoMsg;

    this.loading = true; // start spinner
    this.authService.login(username, password)
      .subscribe(
        data => {
          this.router.navigate(['/home/start']); // rediret to landing page
        },
        errMsg => {
          this.error = true; // to display the error msg
          this.msg = errMsg;
          this.loading = false; // end spinner
        });
  }

}
