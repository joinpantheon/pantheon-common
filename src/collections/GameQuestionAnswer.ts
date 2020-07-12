import QuestionSubject from "../enums/QuestionSubject";
import ResponseType from "../enums/ResponseType";

export default interface GameQuestionAnswer {
  id: string;
  answerText?: string;
  gameId?: string;
  questionAnswerId?: string;
  questionNumber?: number;
  questionResponseType?: ResponseType;
  questionSource?: string;
  questionSubject?: QuestionSubject;
  questionText?: string;
}

// TODO?: might want to add questionResponseText here
// TODO?: add this to gameDocument? consolidation (simpler) VS speed (sockets, transmitting less data)