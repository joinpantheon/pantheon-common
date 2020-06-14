import QuestionSubject from "../enums/QuestionSubject";

export default interface Answer {
  id: string;
  answerText?: string;
  questionId?: string;
  responseType?: string;
  subject?: QuestionSubject;
}
