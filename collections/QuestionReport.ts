
export default interface QuestionReport {
  id: string;
  answerText?: string;
  gameId?: string;
  gameQuestionAnswerId?: string;
  questionAnswerId?: string;
  questionReportText?: string;
  questionResponseId?: string;
  questionResponseText?: string;
  questionSubject?: string;
  questionText?: string;
  reporterUserId?: string;
  creationDatetime?: number;
}