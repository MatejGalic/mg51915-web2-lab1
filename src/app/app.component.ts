import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleEnum } from './enums/role-enum';
import { initialRounds } from './helpers/initial-match-data';
import { UserProfile } from './models/user-profile';
import { DbMockService } from './services/db-mock.service';
import { UserStoreService } from './services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  profilePicture: string;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private userStore: UserStoreService,
    private dbContext: DbMockService
  ) {}

  ngOnInit(): void {
    const admins = environment.adminEmails;

    this.authService.user$.pipe(filter((u) => !!u)).subscribe((user) => {
      this.profilePicture = user.picture;
      const model: UserProfile = {
        fullName: user.name,
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
        role: admins.includes(user.email) ? RoleEnum.Admin : RoleEnum.Regular,
      };
      this.userStore.user = model;
      this.isLoggedIn = true;
    });

    let savedState = JSON.parse(localStorage.getItem('dbState'));
    let initRounds = savedState || initialRounds;

    this.dbContext.rounds = initRounds;
  }
}
