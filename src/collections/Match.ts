import { FieldValue } from '@firebase/firestore-types';
import GameSubject from '../enums/GameSubject';
import { Team } from './Game';
import { Rank } from './User';

export interface MatchUser {
  inviteCode?: string;
  accepted?: boolean;
  userId: string;
  username: string;
  city?: string;
  rank?: Rank;
  school?: string;
  state?: string;
  teamId?: string;
  isGuest?: boolean;
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