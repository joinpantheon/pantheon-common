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
  totalTime?: number;
  gameStats?: GameStats;
  allSubjects?: QuestionStats;
  biology?: QuestionStats;
  chemistry?: QuestionStats;
  computer?: QuestionStats;
  earth?: QuestionStats;
  energy?: QuestionStats;
  math?: QuestionStats;
  physics?: QuestionStats;
  space?: QuestionStats;
  generalKnowledge?: QuestionStats;
}
