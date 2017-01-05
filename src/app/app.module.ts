import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService as GitHubApi } from './shared/services/github-api/api.service';
import { UserConfigResolverService } from './shared/services/user-config-resolver.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SocialIconPipe } from './shared/pipes/social-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SocialIconPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GitHubApi,
    UserConfigResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
