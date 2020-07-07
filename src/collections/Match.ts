import { FieldValue } from "@firebase/firestore-types";
import GameSubject from "../enums/GameSubject";

export interface MatchUser {
  accepted: boolean;
  userId: string;
  username: string;
}

export default interface Match {
  id: string;
  creationDatetime?: number;
  gameId?: string;
  matchFound?: boolean;
  numQuestions?: number;
  ranked?: boolean;
  serverTimestamp?: FieldValue;
  subjects?: GameSubject[];
  user1?: MatchUser;
  user2?: MatchUser;
}
