export default interface Friendship {
  id: string;
  friendshipStartDatetime?: string;
  numRankedGames?: number;
  numRankedGamesLost?: number;
  numRankedGamesWon?: number;
  numTotalGames?: number;
  numUnrankedGamesAgainst?: number;
  numUnrankedGamesAgainstUser1Lost?: number;
  numUnrankedGamesAgainstUser1Won?: number;
  numUnrankedGamesAgainstUser2Lost?: number;
  numUnrankedGamesAgainstUser2Won?: number;
  numUnrankedGamesTogether?: number;
  numUnrankedGamesTogetherLost?: number;
  numUnrankedGamesTogetherWon?: number;
  user1Id?: string;
  user2Id?: string;
}
