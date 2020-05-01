export interface SubjectStats {
  numQuestionsSeen?: number;
  numQuestionsCorrect?: number;
  numQuestionsIncorrect?: number;
  numQuestionsTimeout?: number;
  numRankedGames?: number;
  numRankedGamesWon?: number;
  numRankedGamesLost?: number;
  numUnrankedGames?: number;
  numUnrankedGamesWon?: number;
  numUnrankedGamesLost?: number;
}

export default interface UserPrivate {
  id: string;
  city?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  name?: string; // deprecated, need to change users in actual firebase db
  rating?: number; // Internal elo rating (ex. 1200)
  school?: string;
  state?: string;
  referrer?: string;
  totalTime?: number; // Total time spent playing
  creationDatetime?: number;
  allSubjects?: SubjectStats;
  biology?: SubjectStats;
  chemistry?: SubjectStats;
  earth?: SubjectStats;
  energy?: SubjectStats;
  math?: SubjectStats;
  physics?: SubjectStats;
  space?: SubjectStats;
}
