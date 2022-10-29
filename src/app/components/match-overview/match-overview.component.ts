import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { Match } from 'src/app/models/match';
import { DbMockService } from 'src/app/services/db-mock.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { CommentDeleteDialogComponent } from '../comment-delete-dialog/comment-delete-dialog.component';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { MatchUpsertDialogComponent } from '../match-upsert-dialog/match-upsert-dialog.component';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss'],
})
export class MatchOverviewComponent implements OnInit, OnDestroy {
  matches: Match[];

  private destroy$: Subject<void> = new Subject();

  constructor(
    private dbService: DbMockService,
    private dialog: MatDialog,
    private userStore: UserStoreService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.dbService.matches$
      .pipe(takeUntil(this.destroy$))
      .subscribe((m) => (this.matches = m));
  }

  //#region Comments
  public upsertComment(match: Match, comment: Comment): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '250px',
      data: comment?.comment,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        take(1)
      )
      .subscribe((result) => {
        //update
        if (!!comment) {
          comment.comment = result;
          comment.timestamp = new Date();
        }
        //insert
        else {
          match.comments.push({
            author: this.userStore.user,
            comment: result,
            timestamp: new Date(),
          });
        }
        this.dbService.commitData();
      });
  }

  public deleteComment(match: Match, comment: Comment): void {
    const dialogRef = this.dialog.open(CommentDeleteDialogComponent, {
      width: '250px',
      data: comment?.comment,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        take(1)
      )
      .subscribe(() => {
        match.comments = match.comments.filter((obj) => obj !== comment);
        this.dbService.commitData();
      });
  }

  //#endregion

  //#region MatchResult
  public upsertMatch(match: Match): void {
    const dialogRef = this.dialog.open(MatchUpsertDialogComponent, {
      width: '250px',
      data: match,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((res) => !!res),
        take(1)
      )
      .subscribe((result: Match) => {
        //update
        if (!!match) {
          match.firstTeam = result.firstTeam;
          match.secondTeam = result.secondTeam;
          match.firstTeamScore = result.firstTeamScore;
          match.secondTeamScore = result.secondTeamScore;
        }
        //insert
        else {
          this.dbService.addMatch(result);
        }

        this.dbService.commitData();
      });
  }
}
