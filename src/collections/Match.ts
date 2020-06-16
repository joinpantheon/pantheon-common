import * as firebase from 'firebase';
import GameSubject from "../enums/GameSubject";

export interface MatchUser {
  userId: string;
  username: string;
  accepted: boolean;
}

export default interface Match {
  id: string;
  creationDatetime?: number;
  serverTimestamp?: firebase.firestore.FieldValue;
  gameId?: string;
  matchFound?: boolean;
  ranked?: boolean;
  subjects?: GameSubject[];
  numQuestions?: number;
  user1?: MatchUser;
  user2?: MatchUser;
}
