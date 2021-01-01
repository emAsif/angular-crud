import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Config } from '../../../../shared/config/app.config';
import { UsernameValidators } from 'src/app/shared/validators/username.validators';
import { CreateService } from './create.service';
import { NewUser } from 'src/app/models/newUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})

export class CreateComponent implements OnInit {
  config = Config;

  rf: FormGroup;
  loading = false;
 
  info = '';
  error = '';
  errors = { info: 'active', success: 'success', errror: 'pending'}
  errorCheck = false;
  // refrence for child component
  cRef = 'cFont'

  constructor(
    private _router: Router,
    private userService: UserService,
    private createService: CreateService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.info = 'Bitte prüfen Sie Ihre Stammdaten.';
    this.buidForm();
  }

  // form builder
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
          UsernameValidators.cannotContainSpace
        ]
      ],
      birthday: ['',
        [
          Validators.required
        ]
      ],
      address: ['']
    });
  }

  // navigate to view page
  redirect(): void {
    setTimeout(() => {
      this._router.navigateByUrl('/home/view');
    }, 2000);
  }

  onSubmit(data: NewUser): void {
    
    // stop invalid form submission.
    if (!this.rf.valid) {
      return;
    }

    this.loading = true;
    this.createService.create(data).subscribe(r => { // not using fake api response to avoid unexpected error
      
      this.userService.newUser = data; // saving new user to the service
      this.loading = false

      this.redirect(); // navigate to view page
      this.rf.reset(); // reseting form fields
      this.info = 'Daten erfolgreich aktualisiert.';
      this.error = '';
      this.errorCheck = false;
    }, 
      error => {
        this.loading = false;
        // this.info = '';
        this.error = error;
        this.errorCheck = true;
        console.log('er', error)
      }
    )
  }

  // reset form values
  resetForm(event): void {
    event.preventDefault() // prevent default behaviour.
    this.rf.reset(); // reset form fields
  }

}
