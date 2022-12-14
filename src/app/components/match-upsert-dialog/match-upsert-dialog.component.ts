import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamEnum } from 'src/app/enums/team-enum';
import { Match } from 'src/app/models/match';

@Component({
  selector: 'app-match-upsert-dialog',
  templateUrl: './match-upsert-dialog.component.html',
  styleUrls: ['./match-upsert-dialog.component.scss'],
})
export class MatchUpsertDialogComponent implements OnInit {
  teams: string[] = [];
  isEdit: boolean = !!this.data;

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MatchUpsertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Match,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    for (var team in TeamEnum) {
      this.teams.push(TeamEnum[team]);
    }
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      firstTeam: [this.data?.firstTeam],
      secondTeam: [this.data?.secondTeam],
      secondTeamScore: [this.data?.secondTeamScore],
      firstTeamScore: [this.data?.firstTeamScore],
      comments: [this.data?.comments || []],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const model: Match = this.form.getRawValue();
    this.dialogRef.close(model);
  }
}
