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
  questionNumber?: number;
  serverTimestamp?: FieldValue;
  userId?: string;
}

export interface GameResponse {
  userId?: string;
  questionNumber: number;
  questionResponseText?: string;
  isCorrect?: boolean;
	serverTimestamp?: FieldValue;
}

export default interface Game {
  id: string;
  chatId: string;
  buzzes: GameBuzz[];
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
  responses: GameResponse[];
  subjects?: GameSubject[];
  user1?: GameUser; // User id, username, score
  user2?: GameUser;
}

/*
GameUser {
  indvidualScore
  teamId
}

Team {
  id
  name?
  userIds?
  score
}

userIds: string[]
users: GameUser[]
teams: Team[]

GameBuzz {
  userId
  teamId
  buzzed
  prevTeamIds
  time
}

GameResponse {
  teamId
  userId
  isCorrect
  reponseText
  time
}

*/