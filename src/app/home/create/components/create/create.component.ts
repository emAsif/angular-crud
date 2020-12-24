import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isUndefined } from 'util';
import { Config } from '../../../../shared/config/app.config';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {
  config = Config;

  constructor(private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!isUndefined(id) && id !== null) {
        console.log(id)
      }
    });
  }

  test() {
    setTimeout(() => {
      this._router.navigateByUrl('/home/users');
    }, 500);
  }

}
