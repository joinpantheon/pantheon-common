import Subject from "../enums/Subject";

interface MatchUser {
  id: string;
  username: string;
  accepted: boolean;
}

export default interface Match {
  id: string;
  creationDatetime?: number;
  gameId?: string;
  matchFound?: boolean;
  ranked?: boolean;
  subjects?: Subject[];
  user1?: MatchUser;
  user2?: MatchUser;
}
