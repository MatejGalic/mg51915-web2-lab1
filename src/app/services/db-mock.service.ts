import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Match } from '../models/match';
import { Round } from '../models/round';

@Injectable({
  providedIn: 'root',
})
export class DbMockService {
  // private _matches: BehaviorSubject<Match[]> = new BehaviorSubject(null);

  // public matches$: Observable<Match[]> = this._matches.asObservable();

  // set matches(value: Match[]) {
  //   this._matches.next(value);
  // }

  // get matches(): Match[] {
  //   return this._matches.value;
  // }

  private _rounds: BehaviorSubject<Round[]> = new BehaviorSubject(null);

  public rounds$: Observable<Round[]> = this._rounds.asObservable();

  set rounds(value: Round[]) {
    this._rounds.next(value);
  }

  get rounds(): Round[] {
    return this._rounds.value;
  }
  constructor() {}

  // public addMatch(match: Match): void {
  //   this._matches.value.push(match);
  // }

  public addRound(round: Round): void {
    this._rounds.value.push(round);
  }

  // public commitData(): void {
  //   localStorage.setItem('dbState', JSON.stringify(this.matches));
  //   this._matches.next(this.matches);
  // }

  public commitData(): void {
    localStorage.setItem('dbState', JSON.stringify(this.rounds));
    this._rounds.next(this.rounds);
  }
}
