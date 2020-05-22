import Subject from "../enums/Subject";
export default interface Question {
    id: string;
    answerId?: string;
    difficulty?: number;
    index?: number;
    questionText?: string;
    responseType?: string;
    source?: string;
    subject?: Subject;
}
