import QuestionType from "../enums/QuestionType";
import ResponseType from "../enums/ResponseType";
import Subject from "../enums/Subject";
export default interface QuestionAnswer {
    id: string;
    answerText: string;
    index?: number;
    previousIds?: string[];
    questionText?: string;
    questionType?: QuestionType;
    responseType?: ResponseType;
    source?: string;
    subject?: Subject;
}
