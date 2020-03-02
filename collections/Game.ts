import Subject from "../enums/Subject";

export interface GameUser {
  city?: string;
  school?: string;
  score?: number;
  state?: string;
  userId?: string;
  username?: string;
}

export default interface Game {
  id: string;
  chatId: string;
  gameDurationMs?: number; // Length of game in ms
  gameEndDatetime?: number;
  gameStartDatetime?: number;
  isCompleted?: boolean;
  questionNumber?: number;
  ranked?: boolean;
  subjects?: Subject[];
  user1?: GameUser; // User id, user name, score
  user2?: GameUser;
}
