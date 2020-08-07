import { FieldValue } from '@firebase/firestore-types';
import GameSubject from '../enums/GameSubject';
import { Rank } from './User';

export interface GameUser {
  userId: string;
  username: string;
  city?: string;
  deltaPoints?: number
  isBot?: boolean;
  isGuest?: boolean;
  questionNumLeft?: number; // What question number user left on
  rank?: Rank;
  school?: string;
  score?: number;
  state?: string;
  teamId?: string;
}

export interface GameResponse {
  questionNumber: number;
  teamId: string;
  userId: string;
  buzzTimestamp?: FieldValue;
  isCorrect?: boolean;
  responseText?: string;
  responseTimestamp?: FieldValue;
}

export interface Team {
  id: string;
  name: string;
  score?: number;
  userIds?: string[];
}

export default interface Game {
  id: string;
  chatId?: string;
  gameDurationMs?: number;
  gameEndDatetime?: number;
  gameEndTimestamp?: FieldValue;
  gameStartDatetime?: number;
  gameStartTimestamp?: FieldValue;
  isCompleted?: boolean;
  name?: string;
  numQuestions?: number;
  numWordsRead?: number;
  questionNumber?: number;
  ranked?: boolean;
  rematchId?: string;
  responses?: GameResponse[];
  subjects?: GameSubject[];
  teams?: Team[];
  userIds?: string[];
  users?: GameUser[];
}
