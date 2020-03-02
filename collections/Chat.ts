export default interface Message {
  id: string;
  content?: string;
  creationDatetime?: number;
  userId?: string;
  username?: string;
}

export default interface Chat {
  id: string;
  gameId?: string;
  creationDatetime?: number;
  messages?: Message[];
}
