import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isUndefined } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Config } from '../../../../shared/config/app.config';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  config = Config;

  registrationForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  // to inform child about the current state
  cRef = 'cFont'

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!isUndefined(id) && id !== null) {
        console.log(id)
      }
    });
    this.buidForm();
  }
  buidForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ]
      ],
      lastName: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          // UsernameValidators.cannotContainSpace
        ]
      ],
      birthday: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      address: ['',
        [
          // Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ]
    });
  }

  test() {
    setTimeout(() => {
      this._router.navigateByUrl('/home/users');
    }, 500);
  }

      // convenience getter for easy access to controls
      get firstName() { return this.registrationForm.get('firstName'); }
      get lastName() { return this.registrationForm.get('lastName'); }
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.registrationForm.invalid) {
        return;
      }
  
  }

}
