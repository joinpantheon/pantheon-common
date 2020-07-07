import { FieldValue } from "@firebase/firestore-types";
import GameSubject from "../enums/GameSubject";
import QuestionSubject from "../enums/QuestionSubject";
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
  // Lets us avoid fetching GameQuestionAnswer docs when computing stats
  questionSubject: QuestionSubject;
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
  gameDurationMs?: number;
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
