import MessageType from '../enums/MessageType';

export interface Message {
  id: string;
  content?: string;
  creationDatetime?: number;
  messageType?: MessageType;
  userId?: string;
  username?: string;
}

export default interface Chat {
  id: string;
  creationDatetime?: number;
  gameId?: string;
  messages?: Message[];
  enabled?: boolean;
  userIds?: string[];
}

// everyone chats (lobby)
//   --> everyone with a certain attribute (rank, subject)

// userIds handles allow listing  (need some sort of function)

//     --> chats restricted to some users
//       --> DMs (1v1 chats)
