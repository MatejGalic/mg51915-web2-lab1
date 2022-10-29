import { Injectable } from '@angular/core';
import { RoleEnum } from '../enums/role-enum';
import { Match } from '../models/match';
import { UserProfile } from '../models/user-profile';
import { Comment } from '../models/comment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { initialMatches } from '../helpers/initial-match-data';

@Injectable({
  providedIn: 'root',
})
export class DbMockService {
  // private _matches: BehaviorSubject<Match[]> = new BehaviorSubject(null);
  private _matches: BehaviorSubject<Match[]> = new BehaviorSubject(
    initialMatches
  );

  public matches$: Observable<Match[]> = this._matches.asObservable();

  // set matches(val: Match[]) {
  //   this._matches.next(val);
  // }

  get matches(): Match[] {
    return this._matches.value;
  }
  constructor() {}

  // public getMatches(): Match[] {
  //   this.matches.sort((a, b) => b.leagueScore - a.leagueScore);
  //   return this.matches;
  // }
}
