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
  creationDatetime?: number;
  gameId?: string;
  chatId?: string;
  ownerUserId?: string;
  numQuestions?: number;
  ranked?: boolean;
  serverTimestamp?: FieldValue;
  subjects?: GameSubject[];
  teams?: Team[];
  users?: MatchUser[];
  inviteCodes?: string[];
}