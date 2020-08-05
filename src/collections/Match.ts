import { FieldValue } from '@firebase/firestore-types';
import GameSubject from '../enums/GameSubject';
import { Team } from './Game';
import { Rank } from './User';

export interface MatchUser {
  accepted?: boolean;
  city?: string;
  inviteCode?: string;
  isBot?: boolean;
  isGuest?: boolean;
  rank?: Rank;
  school?: string;
  state?: string;
  teamId?: string;
  userId: string;
  username: string;
}

export default interface Match {
  id: string; // 8 characters, deleting this document later anyway to avoid collisions
  chatId?: string;
  creationDatetime?: number;
  gameId?: string;
  gameName?: string;
  inviteCodes?: string[];
  maxNumTeams?: number;
  maxTeamSize?: number;
  numQuestions?: number;
  ownerUserId?: string;
  ranked?: boolean;
  serverTimestamp?: FieldValue;
  subjects?: GameSubject[];
  teams?: Team[];
  users?: MatchUser[];
}