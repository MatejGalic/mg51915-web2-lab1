import { RoleEnum } from '../enums/role-enum';
import { TeamEnum } from '../enums/team-enum';
import { Comment } from '../models/comment';
import { Match } from '../models/match';
import { Round } from '../models/round';
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
  {
    comment: 'opet je sudac kriv za sve',
    author: users[2],
    timestamp: new Date(),
  },
];

const firstRound: Match[] = [
  {
    firstTeam: TeamEnum.Dinamo,
    secondTeam: TeamEnum.Hajduk,
    firstTeamScore: 1,
    secondTeamScore: 1,
    comments: [comments[0], comments[2]],
  },
  {
    firstTeam: TeamEnum.RealMadrid,
    secondTeam: TeamEnum.Barcelona,
    firstTeamScore: 3,
    secondTeamScore: 0,
    comments: [comments[1]],
  },
  {
    firstTeam: TeamEnum.VelikaGorica,
    secondTeam: TeamEnum.Lokomotiva,
    firstTeamScore: 2,
    secondTeamScore: 1,
    comments: [],
  },
  {
    firstTeam: TeamEnum.Liverpool,
    secondTeam: TeamEnum.Juventus,
    firstTeamScore: 5,
    secondTeamScore: 2,
    comments: [comments[3]],
  },
];

const secondRound: Match[] = [
  {
    firstTeam: TeamEnum.Dinamo,
    secondTeam: TeamEnum.RealMadrid,
    firstTeamScore: 1,
    secondTeamScore: 1,
    comments: [],
  },
  {
    firstTeam: TeamEnum.VelikaGorica,
    secondTeam: TeamEnum.Liverpool,
    firstTeamScore: null,
    secondTeamScore: null,
    comments: [],
  },
];

const finalRound: Match[] = [
  {
    firstTeam: null,
    secondTeam: null,
    firstTeamScore: null,
    secondTeamScore: null,
    comments: [],
  },
];

export const initialRounds: Round[] = [
  {
    round: 1,
    matches: firstRound,
  },
  {
    round: 2,
    matches: secondRound,
  },
  {
    round: 3,
    matches: finalRound,
  },
];
