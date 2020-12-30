import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CreateService } from 'src/app/home/create/components/create/create.service';
import { Config } from '../../../../shared/config/app.config';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {
  config = Config;

  cRef = 'refId'; // dom refrence id for fonts resizing.
  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get('http://localhost:4000/users').subscribe(data => {
      console.log('submitted', data);

  })
  }

}