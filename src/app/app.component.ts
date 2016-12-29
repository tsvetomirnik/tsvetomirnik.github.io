import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ApiService as GitHubApi, User } from './shared/services/github-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<User>;

  constructor(
    private http: Http,
    private gitHubApi: GitHubApi
  ) { }

  ngOnInit() {
    let username = 'tsvetomirnik';
    this.user = this.gitHubApi.getUser(username);
  }
}
