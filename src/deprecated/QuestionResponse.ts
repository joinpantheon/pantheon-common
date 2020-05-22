import Subject from '../enums/Subject';

export default interface QuestionResponse {
  id: string;
  answerText?: string;
  isCorrect?: boolean;
  gameId?: string;
  gameQuestionAnswerId?: string;
  questionAnswerId?: string;
  questionNumber?: number;
  questionResponderUserId?: string;
  questionResponderUserName?: string;
  questionResponseText?: string;
  questionText?: string;
  questionSubject?: Subject;
}
