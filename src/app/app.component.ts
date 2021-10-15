import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CallApiDemo Hihi';

  constructor(private api : GetApiService) {}

  dataApi:any = [];

  ngOnInit() {
    this.api.apiCall().subscribe(data => {
      this.dataApi = data;
      console.log(this.dataApi);
    })
  }
}
