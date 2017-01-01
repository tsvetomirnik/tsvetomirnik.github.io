import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as GitHub from '../shared/services/github-api';
import { userConfig } from '../user.config';

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
    this.gitHubApi.getUser(userConfig.githubUsername)
      .subscribe(user => {
        this.user = user;
      });
  }
}
