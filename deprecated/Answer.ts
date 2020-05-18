import Subject from "../enums/Subject";

export default interface Answer {
  id: string;
  answerText?: string;
  questionId?: string;
  responseType?: string;
  subject?: Subject;
}
