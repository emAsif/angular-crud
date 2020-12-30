import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../core/services';
import { UsernameValidators } from '../../username.validators';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginHeading = Config.message.loginText;
  loading = false;
  // submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          UsernameValidators.cannotContainSpace
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ]
      ]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to controls
  // get username() { return this.loginForm.get('username'); }
  // get password() { return this.loginForm.get('password'); }

  onSubmit() {
    // this.submitted = true;

    // stop here if form is invalid
    if (!this.loginForm.valid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
