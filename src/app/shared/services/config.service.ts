import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserConfigResolverService } from './user-config-resolver.service';
import { IUserConfig } from '../interfaces';

@Injectable()
export class ConfigService {

  public static readonly configPath = 'config.json';

  constructor(
    private http: Http,
    private userConfigResolver: UserConfigResolverService
  ) { }

  getConfiguration(): Observable<IUserConfig> {
    return this.http.get(ConfigService.configPath)
    .map(result  => {
      return JSON.parse(result.text());
    });
  }
}
