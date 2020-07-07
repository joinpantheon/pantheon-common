import { FieldValue } from "@firebase/firestore-types";
import GameSubject from "../enums/GameSubject";
import { Rank } from "./User";

export interface GameUser {
  city?: string;
  pointsChange?: number
  rank?: Rank;
  school?: string;
  score?: number;
  state?: string;
  teamId?: string;
  userId?: string;
  username?: string;
}

export interface GameResponse {
  questionNumber: number;
  teamId: string;
  userId: string;
  buzzTimestamp?: FieldValue;
  isCorrect?: boolean;
  responseText?: string;
}

export interface Team {
  id: string;
  name: string;
  score?: string;
  userIds?: string[]; 
}

export default interface Game {
  id: string;
  chatId: string;
  gameDurationMs?: number; // Length of game in ms
  gameEndDatetime?: number;
  gameEndServerTimestamp?: FieldValue;
  gameStartDatetime?: number;
  gameStartServerTimestamp?: FieldValue;
  isCompleted?: boolean;
  leaverId?: string;
  playerLeft?: boolean;
  questionNumber?: number;
  ranked?: boolean;
  responses: GameResponse[];
  subjects?: GameSubject[];
  teams?: Team[];
  userIds?: string[];
  users?: GameUser[];
}
