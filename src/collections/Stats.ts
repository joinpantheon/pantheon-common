export interface GameStats {
  numGames?: number;
  numGamesWon?: number;
  numGamesLost?: number;
  numGamesDrawn?: number;
  numGamesLeft?: number;
  numGamesWonByDefault?: number;
}

export interface QuestionStats {
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
  gameStats?: GameStats;
  allSubjects?: QuestionStats;
  biology?: QuestionStats;
  chemistry?: QuestionStats;
  computer?: QuestionStats;
  earth?: QuestionStats;
  energy?: QuestionStats;
  generalKnowledge?: QuestionStats;
  math?: QuestionStats;
  physics?: QuestionStats;
  space?: QuestionStats;
  totalTime?: number;
}
