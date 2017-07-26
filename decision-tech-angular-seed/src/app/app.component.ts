import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BroadbandResult } from "app/types/broadbanddeals";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(http: Http) {
    http.get('assets/deals.json')
      .map(res => res.json())
      .subscribe(result => this.deals = result.deals);
  }

  title = "start"
  deals: BroadbandResult.Deal[] = []

  ngOnDestroy() {
  }
}
