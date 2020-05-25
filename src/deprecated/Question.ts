import Subject from "../enums/Subject";

export default interface Question {
  id: string;
  answerId?: string;
  difficulty?: number;
  index?: number; // Used to randomly pick questions
  questionText?: string;
  responseType?: string; // Multiple choice or short answer
  source?: string; // Where the question came from
  subject?: Subject; // Ex. physics
}

// Can't send answer text to frontend or else there might be some cheating :)