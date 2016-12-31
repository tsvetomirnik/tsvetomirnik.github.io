import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as GitHub from './shared/services/github-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: Observable<GitHub.User>;

  constructor(
    private http: Http,
    private gitHubApi: GitHub.ApiService
  ) { }

  ngOnInit() {
    let username = 'tsvetomirnik';
    this.user = this.gitHubApi.getUser(username);
  }
}
