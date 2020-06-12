import * as firebase from 'firebase';
import Subject from "../enums/Subject";

export interface MatchUser {
  id: string;
  username: string;
  accepted: boolean;
}

export default interface Match {
  id: string;
  creationDatetime?: number;
  serverTimestamp?: firebase.firestore.Timestamp;
  gameId?: string;
  matchFound?: boolean;
  ranked?: boolean;
  subjects?: Subject[];
  user1?: MatchUser;
  user2?: MatchUser;
}
