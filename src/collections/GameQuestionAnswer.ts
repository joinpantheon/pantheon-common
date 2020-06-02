import ResponseType from "../enums/ResponseType";
import Subject from "../enums/Subject";

export default interface GameQuestionAnswer {
  id: string;
  gameId?: string;
  answerText?: string;
  questionAnswerId?: string;
  questionNumber?: number;
  questionResponseType?: ResponseType;
  questionSubject?: Subject;
  questionText?: string;
  questionSource?: string;
}

// TODO?: might want to add questionResponseText here