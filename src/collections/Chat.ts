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
}
