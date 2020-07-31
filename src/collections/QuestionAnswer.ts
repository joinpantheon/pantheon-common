import QuestionError from '../enums/QuestionError';
import QuestionSubject from '../enums/QuestionSubject';
import QuestionType from '../enums/QuestionType';
import ResponseType from '../enums/ResponseType';

export default interface QuestionAnswer {
  id: string;
  answerText?: string;
  details?: string; // Any extra information from source that might be useful
  errors?: QuestionError[];
  index?: number; // Used to randomly pick questions
  previousIds?: string[]; // List of previous ids, in case we update id
  questionText?: string;
  questionType?: QuestionType; // Tossup or bonus
  responseType?: ResponseType; // Multiple choice or short answer
  source?: string; // Where the question came from
  subject?: QuestionSubject;
  uploader?: string; // Who uploaded the question/aggregator name
  url?: string; // Source url
}
