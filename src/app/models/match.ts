import { TeamEnum } from '../enums/team-enum';
import { Comment } from './comment';

export interface Match {
  firstTeam: TeamEnum;
  secondTeam: TeamEnum;
  firstTeamScore: number;
  secondTeamScore: number;
  comments: Comment[];
}
