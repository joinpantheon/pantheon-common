export default interface Friendship {
    id: string;
    friendshipStartDatetime?: string;
    user1Id?: string;
    user2Id?: string;
    numTotalGames?: number;
    numUnrankedGamesTogether?: number;
    numUnrankedGamesTogetherWon?: number;
    numUnrankedGamesTogetherLost?: number;
    numUnrankedGamesAgainst?: number;
    numUnrankedGamesAgainstUser1Won?: number;
    numUnrankedGamesAgainstUser1Lost?: number;
    numUnrankedGamesAgainstUser2Won?: number;
    numUnrankedGamesAgainstUser2Lost?: number;
    numRankedGames?: number;
    numRankedGamesWon?: number;
    numRankedGamesLost?: number;
}
