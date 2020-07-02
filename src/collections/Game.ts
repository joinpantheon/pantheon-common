import { FieldValue } from "@firebase/firestore-types";
import GameSubject from "../enums/GameSubject";
import { Rank } from "./User";

export interface GameUser {
  userId?: string;
  username?: string;
  city?: string;
  school?: string;
  score?: number;
  state?: string;
  rank?: Rank;
  pointsChange?: number
}

export interface GameBuzz {
  buzzed?: boolean;
  serverTimestamp?: FieldValue;
  userId?: string;
}

export interface GameResponses {
  user1?: GameResponse,
  user2?: GameResponse
}

export interface GameResponse {
  userId?: string;
  questionResponseText?: string;
  isCorrect?: boolean;
	serverTimestamp?: FieldValue;
}

export default interface Game {
  id: string;
  chatId: string;
  buzz: GameBuzz;
  gameDurationMs?: number; // Length of game in ms
  gameEndDatetime?: number;
  gameStartDatetime?: number;
  gameStartServerTimestamp?: FieldValue;
  gameEndServerTimestamp?: FieldValue;
  isCompleted?: boolean;
  leaverId?: string;
  playerLeft?: boolean;
  questionNumber?: number;
  ranked?: boolean;
  responses: GameResponses[];
  subjects?: GameSubject[];
  user1?: GameUser; // User id, username, score
  user2?: GameUser;
}
