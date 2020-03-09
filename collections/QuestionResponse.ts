export default interface QuestionResponse {
  id: string;
  answerId?: string;
  answerText?: string;
  isCorrect?: boolean;
  gameId?: string;
  gameQuestionId?: string;
  questionId?: string;
  questionNumber?: number;
  questionResponderUserId?: string;
  questionResponderUserName?: string;
  questionResponseText?: string;
  questionText?: string;
}
