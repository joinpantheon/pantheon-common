import QuestionReportReason from "../enums/QuestionReportReason";

export default interface QuestionReport {
  id: string;
  answerId?: string;
  answerText?: string;
  gameId?: string;
  gameQuestionId?: string;
  questionId?: string;
  questionReportReasons?: QuestionReportReason[];
  questionReportText?: string;
  questionResponseId?: string;
  questionResponseText?: string;
  questionSubject?: string;
  questionText?: string;
  reporterUserId?: string;
}
