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
  name?: string;
  rating?: number; // Internal elo rating (ex. 1200)
  school?: string;
  state?: string;
  totalTime?: number; // Total time spent playing
  allSubjects?: SubjectStats;
  biology?: SubjectStats;
  chemistry?: SubjectStats;
  earth?: SubjectStats;
  energy?: SubjectStats;
  math?: SubjectStats;
  physics?: SubjectStats;
  space?: SubjectStats;
}
