import { FieldValue } from '@firebase/firestore-types';
import GameSubject from '../enums/GameSubject';
import { Team } from './Game';
import { Rank } from './User';

export interface MatchUser {
  userId: string;
  username: string;
  accepted?: boolean;
  city?: string;
  inviteCode?: string; // isBot=true, doesn't exist
  isBot?: boolean;
  isGuest?: boolean;
  rank?: Rank;
  school?: string;
  state?: string;
  teamId?: string;
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
  rematchId?: string;
  serverTimestamp?: FieldValue;
  subjects?: GameSubject[];
  teams?: Team[];
  users?: MatchUser[];
}