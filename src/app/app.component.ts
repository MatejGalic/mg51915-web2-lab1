import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { filter, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleEnum } from './enums/role-enum';
import { UserProfile } from './models/user-profile';
import { UserStoreService } from './services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    const admins = environment.adminEmails;
    this.authService.user$
      .pipe(
        filter((u) => !!u),
        take(1)
      )
      .subscribe((user) => {
        const model: UserProfile = {
          fullName: user.name,
          firstName: user.given_name,
          lastName: user.family_name,
          email: user.email,
          role: admins.includes(user.email) ? RoleEnum.Admin : RoleEnum.Regular,
        };
        this.userStore.user = model;
      });
  }
}
