import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as GitHub from '../shared/services/github-api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: GitHub.User;

  constructor(
    private http: Http,
    private gitHubApi: GitHub.ApiService
  ) { }

  ngOnInit() {
    let username = 'tsvetomirnik';
    this.gitHubApi.getUser(username)
      .subscribe(user => {
        this.user = user;
      });
  }
}
