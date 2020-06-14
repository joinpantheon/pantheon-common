import QuestionSubject from "../enums/QuestionSubject";
import ResponseType from "../enums/ResponseType";

export default interface GameQuestionAnswer {
  id: string;
  gameId?: string;
  answerText?: string;
  questionAnswerId?: string;
  questionNumber?: number;
  questionResponseType?: ResponseType;
  questionSubject?: QuestionSubject;
  questionText?: string;
  questionSource?: string;
}

// TODO?: might want to add questionResponseText here