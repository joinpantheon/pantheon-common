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
  userId?: string;
  username?: string;
}

export interface GameResponse {
  buzzTimestamp?: FieldValue;
  isCorrect?: boolean;
  questionNumber: number;
  responseText?: string;
  userId?: string;
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