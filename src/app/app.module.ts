import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { environment } from 'src/environments/environment';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, AuthButtonComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: environment.auth0_client_domain,
      clientId: environment.auth0_client_id,
      useRefreshTokens: true,
      cacheLocation: 'localstorage'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
