import { FieldValue } from "@firebase/firestore-types";
import GameSubject from "../enums/GameSubject";
import { Team } from "./Game";

export interface MatchUser {
  accepted: boolean;
  userId: string;
  username: string;
}

export default interface Match {
  id: string;
  creationDatetime?: number;
  gameId?: string;
  chatId?: string;
  ownerUserId?: string;
  matchFound?: boolean;
  numQuestions?: number;
  ranked?: boolean;
  serverTimestamp?: FieldValue;
  subjects?: GameSubject[];
  teams?: Team[];
  users?: MatchUser[];
}