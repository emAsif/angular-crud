import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../core/services';
import { UsernameValidators } from '../../../shared/validators/username.validators';
import { Config } from '../../../shared/config/app.config'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  config = Config;
  loginForm: FormGroup;
  
  loading = false;
  // returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
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

    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    this.error = '';
    this.loading = true;
    this.authService.login(username, password)
      .subscribe(
        data => {
          this.router.navigate(['/home/start']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
