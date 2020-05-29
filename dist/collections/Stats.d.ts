export interface SubjectStat {
    numQuestionsSeen?: number;
    numQuestionsCorrect?: number;
    numQuestionsIncorrect?: number;
    numQuestionsUnanswered?: number;
    questionCorrectPercentage?: number;
    numGames?: number;
    numGamesWon?: number;
    numGamesLost?: number;
    numGamesDrawn?: number;
    numGamesLeft?: number;
    numGamesWonByDefault?: number;
}
export default interface Stats {
    userId: string;
    username: string;
    totalTime?: number;
    allSubjects?: SubjectStat;
    biology?: SubjectStat;
    chemistry?: SubjectStat;
    computer?: SubjectStat;
    earth?: SubjectStat;
    energy?: SubjectStat;
    math?: SubjectStat;
    physics?: SubjectStat;
    space?: SubjectStat;
    generalKnowledge?: SubjectStat;
}
