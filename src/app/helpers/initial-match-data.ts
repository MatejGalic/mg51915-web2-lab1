import { RoleEnum } from '../enums/role-enum';
import { TeamEnum } from '../enums/team-enum';
import { Comment } from '../models/comment';
import { Match } from '../models/match';
import { UserProfile } from '../models/user-profile';

const users: UserProfile[] = [
  {
    fullName: 'Ivan Horvat',
    email: 'ivan.horvat@hotmail.com',
    role: RoleEnum.Regular,
  },
  {
    fullName: 'Luka Bulić',
    email: 'luka.bulic@antena.hr',
    role: RoleEnum.Regular,
  },
  {
    fullName: 'Zoran Šprajc',
    email: 'sprajc@rtl.eu',
    role: RoleEnum.Regular,
  },
];

const comments: Comment[] = [
  {
    comment: 'Katastrofa igra. Sramota od golmana.',
    author: users[0],
    timestamp: new Date(),
  },
  {
    comment: 'Super gol u 41. minuti!',
    author: users[1],
    timestamp: new Date(),
  },
  {
    comment: 'Nije Modrić kakav je nekada bio...',
    author: users[2],
    timestamp: new Date(),
  },
];

export const initialMatches: Match[] = [
  {
    firstTeam: TeamEnum.Dinamo,
    secondTeam: TeamEnum.Hajduk,
    firstTeamScore: 1,
    secondTeamScore: 1,
    comments: [comments[0], comments[1]],
  },
  {
    firstTeam: TeamEnum.RealMadrid,
    secondTeam: TeamEnum.Barcelona,
    firstTeamScore: 3,
    secondTeamScore: 0,
    comments: [comments[2]],
  },
  {
    firstTeam: TeamEnum.VelikaGorica,
    secondTeam: TeamEnum.Lokomotiva,
    firstTeamScore: 1,
    secondTeamScore: 2,
    comments: [],
  },
];
