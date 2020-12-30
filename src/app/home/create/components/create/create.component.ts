import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Config } from '../../../../shared/config/app.config';
import { UsernameValidators } from 'src/app/login/username.validators';
import { User } from 'src/app/models/user';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  config = Config;

  rf: FormGroup;
  loading = false;
  // submitted = false;
  error = '';
  
  // refrence for child component
  cRef = 'cFont'

  constructor(
    private _router: Router,
    private createService: CreateService ,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buidForm();
  }
  buidForm() {
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
      email: ['',
        [
          Validators.required,
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

  redirect() {
    setTimeout(() => {
      this._router.navigateByUrl('/home/view');
    }, 1000);
  }
  
  onSubmit(values: User) {
    this.loading = true;
    console.log(values)
    // stop here if form is invalid
    if (!this.rf.invalid) {
      
      this.createService.create(values).subscribe(data => {
        console.log('submitted', data);
        this.loading = false
    })
    }

  }

}
