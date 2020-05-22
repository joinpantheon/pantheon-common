import Subject from "../enums/Subject";
export default interface GameQuestionAnswer {
    id: string;
    gameId?: string;
    answerText?: string;
    questionAnswerId?: string;
    questionNumber?: number;
    questionResponseType?: string;
    questionSubject?: Subject;
    questionText?: string;
}
