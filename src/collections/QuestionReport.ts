import QuestionSubject from "../enums/QuestionSubject";
import ResponseType from "../enums/ResponseType";

export default interface QuestionReport {
  id: string;
  answerText?: string;
  gameId?: string;
  gameQuestionAnswerId?: string;
  questionAnswerId?: string;
  questionIndex?: number;
  questionReportText?: string;
  questionResponseId?: string;
  questionResponseText?: string;
  questionResponseType?: ResponseType;
  questionSubject?: QuestionSubject;
  questionText?: string;
  reporterUserId?: string;
  creationDatetime?: number;
}