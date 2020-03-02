export interface QuestionResponseInfo {
  userId?: string;
  username?: string;
  questionResponseId?: string;
  questionResponseText?: string;
}

export default interface GameQuestion {
  id: string;
  answerId?: string;
  correctResponseInfo?: QuestionResponseInfo;
  gameId?: string;
  incorrectResponseInfo?: QuestionResponseInfo;
  questionDisplayTimeStart?: number;
  questionDisplayTimeEnd?: number;
  questionId?: string;
  questionNumber?: number;
  questionResponseType?: string; // Multiple choice or short answer
  questionSubject?: string;
  questionText?: string;
}

// TODO?: check to see if we want to duplication most Question fields in here
// TODO?: might want to add questionResponseText here
