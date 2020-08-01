import QuestionSubject from '../enums/QuestionSubject';
import ResponseType from '../enums/ResponseType';

export default interface QuestionReport {
  id: string;
  answerText?: string;
  creationDatetime?: number;
  gameId?: string;
  gameQuestionAnswerId?: string;
  questionAnswerId?: string;
  questionReportText?: string;
  questionResponseId?: string;
  questionResponseText?: string;
  questionResponseType?: ResponseType;
  questionSubject?: QuestionSubject;
  questionText?: string;
  reporterUserId?: string;
}
