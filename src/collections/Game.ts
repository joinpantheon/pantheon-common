import Subject from "../enums/Subject";
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

export interface QuestionResponseInfo {
  userId?: string;
  questionResponseText?: string;
  creationDatetime?: number;
  serverTimestamp?: firebase.firestore.Timestamp;
}

export interface QuestionBuzzerInfo {
  userId?: string;
	creationDatetime?: number;
	serverTimestamp?: firebase.firestore.Timestamp;
}

export default interface Game {
  id: string;
  chatId: string;
  gameDurationMs?: number; // Length of game in ms
  gameEndDatetime?: number;
  gameStartDatetime?: number;
  gameStartServerTimestamp?: firebase.firestore.Timestamp;
  gameEndServerTimestamp?: firebase.firestore.Timestamp;
  isCompleted?: boolean;
  leaverId?: string;
  playerLeft?: boolean;
  questionNumber?: number;
  responseInfo?: { [questionNumberX: string]:
    {
      user1: {
        incorrectResponseInfo: QuestionResponseInfo | null, 
        correctResponseInfo: QuestionResponseInfo | null,
        buzzerInfo: QuestionBuzzerInfo | null
      },
      user2: {
        incorrectResponseInfo: QuestionResponseInfo | null, 
        correctResponseInfo: QuestionResponseInfo | null,
        buzzerInfo: QuestionBuzzerInfo | null
      }
    }
  };
  ranked?: boolean;
  subjects?: Subject[];
  user1?: GameUser; // User id, user name, score
  user2?: GameUser;
}
