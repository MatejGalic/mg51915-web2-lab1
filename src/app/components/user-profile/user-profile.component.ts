import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { RoleEnum } from 'src/app/enums/role-enum';
import { UserProfile } from 'src/app/models/user-profile';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  public user: UserProfile;
  public roleEnum = RoleEnum;

  private destroy$: Subject<void> = new Subject();

  constructor(private userStore: UserStoreService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.userStore.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => (this.user = user));
  }
}
