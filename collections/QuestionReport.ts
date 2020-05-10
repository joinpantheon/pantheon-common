import QuestionReportReason from "../enums/QuestionReportReason";

export default interface QuestionReport {
  id: string;
  answerText?: string;
  gameId?: string;
  gameQuestionAnswerId?: string;
  questionAnswerId?: string;
  questionReportReasons?: QuestionReportReason[];
  questionReportText?: string;
  questionResponseId?: string;
  questionResponseText?: string;
  questionSubject?: string;
  questionText?: string;
  reporterUserId?: string;
}
