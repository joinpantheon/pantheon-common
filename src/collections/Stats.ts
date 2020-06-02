export interface SubjectStats {
  numGames?: number;
  numGamesWon?: number;
  numGamesLost?: number;
  numGamesDrawn?: number;
  numGamesLeft?: number;
  numGamesWonByDefault?: number;
  numQuestionsSeen?: number;
  numQuestionsCorrect?: number;
  numQuestionsIncorrect?: number;
  numQuestionsUnanswered?: number;
  questionCorrectPercentage?: number;
}

export default interface Stats {
  id: string;
  userId: string;
  username: string;
  totalTime?: number;
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
