import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root',
})
export class DbMockService {
  private _matches: BehaviorSubject<Match[]> = new BehaviorSubject(null);

  public matches$: Observable<Match[]> = this._matches.asObservable();

  set matches(value: Match[]) {
    this._matches.next(value);
  }

  get matches(): Match[] {
    return this._matches.value;
  }
  constructor() {}

  public addMatch(match: Match): void {
    this._matches.value.push(match);
  }

  public commitData(): void {
    localStorage.setItem('dbState', JSON.stringify(this.matches));
    this._matches.next(this.matches);
  }
}
