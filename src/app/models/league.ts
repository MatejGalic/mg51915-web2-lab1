import { SportEnum } from '../enums/sport-enum';
import { Match } from './match';

export interface League {
  sport: SportEnum;
  leagueName: string;
  games: Match[];
}
