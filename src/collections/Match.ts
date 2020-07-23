import { FieldValue } from "@firebase/firestore-types";
import GameSubject from "../enums/GameSubject";
import { Team } from "./Game";

export interface MatchUser {
  inviteCode?: string;
  accepted?: boolean;
  userId: string;
  username: string;
}

export default interface Match {
  id: string; // 8 characters, deleting this document later anyway to avoid collisions
  chatId?: string;
  creationDatetime?: number;
  gameId?: string;
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