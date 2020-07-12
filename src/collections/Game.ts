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
  startToBuzzOffsetMs?: number;
  buzzTimestamp?: FieldValue;
  isCorrect?: boolean;
  responseText?: string;
}

export interface Team {
  id: string;
  name: string;
  score?: number;
  userIds?: string[]; 
}

export default interface Game {
  id: string;
  chatId: string;
  gameDurationMs?: number;
  gameEndDatetime?: number;
  gameEndTimestamp?: FieldValue;
  gameStartDatetime?: number;
  gameStartTimestamp?: FieldValue;
  isCompleted?: boolean;
  leaverId?: string;
  playerLeft?: boolean;
  questionNumber?: number;
  ranked?: boolean;
  responses?: GameResponse[];
  subjects?: GameSubject[];
  teams?: Team[];
  userIds?: string[];
  users?: GameUser[];
}
