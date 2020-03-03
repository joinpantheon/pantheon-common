import Subject from "../enums/Subject";

export default interface Match {
  id: string;
  creationDatetime?: number;
  gameId?: string;
  matchFound?: boolean;
  ranked?: boolean;
  subjects?: Subject[];
  user1Id?: string;
  user2Id?: string;
}
