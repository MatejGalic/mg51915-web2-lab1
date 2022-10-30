import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { CommentDeleteDialogComponent } from './components/comment-delete-dialog/comment-delete-dialog.component';
import { CommentDialogComponent } from './components/comment-dialog/comment-dialog.component';
import { MatchOverviewComponent } from './components/match-overview/match-overview.component';
import { MatchUpsertDialogComponent } from './components/match-upsert-dialog/match-upsert-dialog.component';
import { OverallResultComponent } from './components/overall-result/overall-result.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthButtonComponent,
    UserProfileComponent,
    MatchOverviewComponent,
    OverallResultComponent,
    CommentDialogComponent,
    CommentDeleteDialogComponent,
    MatchUpsertDialogComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
