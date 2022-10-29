import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialMatches } from '../helpers/initial-match-data';
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

  public commitData(): void {
    localStorage.setItem('dbState', JSON.stringify(this.matches));
  }
}
