import MessageType from '../enums/MessageType';

export interface Message {
  id: string;
  content?: string;
  creationDatetime?: number;
  userId?: string;
  username?: string;
  messageType?: MessageType;
}

export default interface Chat {
  id: string;
  gameId?: string;
  creationDatetime?: number;
  messages?: Message[];
}
