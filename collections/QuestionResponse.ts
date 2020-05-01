import Subject from '../enums/Subject';

export default interface QuestionResponse {
  id: string;
  answerId?: string;
  answerText?: string;
  isCorrect?: boolean;
  gameId?: string;
  gameQuestionAnswerId?: string;
  questionId?: string;
  questionNumber?: number;
  questionResponderUserId?: string;
  questionResponderUserName?: string;
  questionResponseText?: string;
  questionText?: string;
  questionSubject?: Subject;
}
