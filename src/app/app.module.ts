import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { MatchOverviewComponent } from './components/match-overview/match-overview.component';
import { OverallResultComponent } from './components/overall-result/overall-result.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthButtonComponent,
    UserProfileComponent,
    MatchOverviewComponent,
    OverallResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth0_client_domain,
      clientId: environment.auth0_client_id,
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
