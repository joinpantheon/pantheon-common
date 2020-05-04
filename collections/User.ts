import Division from "../enums/Division";
import Tier from "../enums/Tier";

export interface Rank {
  tier?: Tier; // Ex. Bronze
  division?: Division; // Division within tier [1-4]
  points?: number; // Within tier and division [0-100]
}

export interface SubjectStats {
  numQuestionsSeen?: number;
  numQuestionsCorrect?: number;
  numQuestionsIncorrect?: number;
  numQuestionsTimeout?: number;
  numGames?: number;
  numGamesWon?: number;
  numGamesLost?: number;
  numGamesLeft?: number;
  numGamesWonByDefault?: number;
}

export default interface User {
  id: string;
  creationDatetime?: number;
  city?: string;
  experience?: number; // Measure of W/L ratio + time spent [0, inf)
  honor?: number; // Measure of sportsmanship [0, 1]
  rank?: Rank;
  school?: string;
  state?: string;
  username?: string;
  totalTime?: number; // Total time spent playing
  allSubjects?: SubjectStats;
  biology?: SubjectStats;
  chemistry?: SubjectStats;
  computer?: SubjectStats;
  earth?: SubjectStats;
  energy?: SubjectStats;
  math?: SubjectStats;
  physics?: SubjectStats;
  space?: SubjectStats;
  generalKnowledge?: SubjectStats;
}

// TODO?: should honor be private?
