import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, take } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { Match } from 'src/app/models/match';
import { DbMockService } from 'src/app/services/db-mock.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { CommentDeleteDialogComponent } from '../comment-delete-dialog/comment-delete-dialog.component';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss'],
})
export class MatchOverviewComponent implements OnInit {
  matches: Match[];

  constructor(
    private dbService: DbMockService,
    private dialog: MatDialog,
    private userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    this.dbService.matches$.subscribe((m) => (this.matches = m));
  }

  public upsertComment(match: Match, comment: Comment): void {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      width: '250px',
      data: comment?.comment,
    });

    console.log(this.userStore.user);

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
}
