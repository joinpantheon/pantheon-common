import { FieldValue } from "@firebase/firestore-types";
import GameSubject from "../enums/GameSubject";

export interface MatchUser {
  userId: string;
  username: string;
  accepted: boolean;
}

export default interface Match {
  id: string;
  creationDatetime?: number;
  serverTimestamp?: FieldValue;
  gameId?: string;
  matchFound?: boolean;
  ranked?: boolean;
  subjects?: GameSubject[];
  numQuestions?: number;
  user1?: MatchUser;
  user2?: MatchUser;
}
