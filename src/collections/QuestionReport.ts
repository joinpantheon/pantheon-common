import ResponseType from "../enums/ResponseType";
import Subject from "../enums/Subject";

export default interface QuestionReport {
  id: string;
  answerText?: string;
  gameId?: string;
  gameQuestionAnswerId?: string;
  questionAnswerId?: string;
  questionReportText?: string;
  questionResponseId?: string;
  questionResponseText?: string;
  questionResponseType?: ResponseType;
  questionSubject?: Subject;
  questionText?: string;
  reporterUserId?: string;
  creationDatetime?: number;
}