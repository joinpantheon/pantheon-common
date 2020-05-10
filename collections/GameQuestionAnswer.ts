import Subject from "../enums/Subject";

export default interface GameQuestionAnswer {
  id: string;
  gameId?: string;
  answerText?: string;
  questionAnswerId?: string;
  questionNumber?: number;
  questionResponseType?: string; // Multiple choice or short answer
  questionSubject?: Subject;
  questionText?: string;
}

// TODO?: might want to add questionResponseText here