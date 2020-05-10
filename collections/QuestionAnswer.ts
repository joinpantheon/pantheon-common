import QuestionType from "../enums/QuestionType";
import ResponseType from "../enums/ResponseType";
import Subject from "../enums/Subject";

export default interface QuestionAnswer {
  id: string;
  answerText: string;
  index?: number; // Used to randomly pick questions
  previousIds?: string[]; // List of previous ids, in case we update id
  questionText?: string;
  questionType?: QuestionType; // Tossup or bonus
  responseType?: ResponseType; // Multiple choice or short answer
  source?: string; // Where the question came from
  subject?: Subject;
}