import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { TeamEnum } from 'src/app/enums/team-enum';
import { MatchResult } from 'src/app/models/match-result';
import { DbMockService } from 'src/app/services/db-mock.service';

@Component({
  selector: 'app-overall-result',
  templateUrl: './overall-result.component.html',
  styleUrls: ['./overall-result.component.scss'],
})
export class OverallResultComponent implements OnInit {
  public results$ = this.dbService.matches$.pipe(
    map((ms) => {
      let scoreboard: Record<string, MatchResult> = {};
      for (var team in TeamEnum) {
        scoreboard[team] = { leagueScore: 0, goalDifference: 0 };
      }

      ms.forEach((m) => {
        const team1 = Object.keys(TeamEnum).find(
          (key) => TeamEnum[key] === m.firstTeam
        );
        const team2 = Object.keys(TeamEnum).find(
          (key) => TeamEnum[key] === m.secondTeam
        );

        const scoreDifference = m.firstTeamScore - m.secondTeamScore;
        scoreboard[team1].goalDifference += scoreDifference;
        scoreboard[team2].goalDifference += 0 - scoreDifference;

        if (m.firstTeamScore == m.secondTeamScore) {
          scoreboard[team1].leagueScore += 1;
          scoreboard[team2].leagueScore += 1;
        } else if (m.firstTeamScore > m.secondTeamScore) {
          scoreboard[team1].leagueScore += 3;
        } else {
          scoreboard[team2].leagueScore += 3;
        }
      });

      let results: {
        teamName: string;
        leagueScore: number;
        goalDifference: number;
      }[] = [];

      for (var score in scoreboard) {
        results.push({
          teamName: TeamEnum[score],
          leagueScore: scoreboard[score].leagueScore,
          goalDifference: scoreboard[score].goalDifference,
        });
      }

      results.sort((a, b) => {
        if (a.leagueScore != b.leagueScore) {
          return b.goalDifference - a.leagueScore;
        } else {
          return b.goalDifference - a.goalDifference;
        }
      });

      return results;
    })
  );

  constructor(private dbService: DbMockService) {}

  ngOnInit(): void {}
}
