import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { DbMockService } from 'src/app/services/db-mock.service';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss'],
})
export class MatchOverviewComponent implements OnInit {
  matches: Match[]

  constructor(private dbService: DbMockService) {}

  ngOnInit(): void {
    this.dbService.matches$.subscribe((m) => (this.matches = m));
  }
}
