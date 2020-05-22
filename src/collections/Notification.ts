interface GameMatchMessage {
  matchId: string;
  subject?: string; // Subject enum
  requestAccepted?: boolean;
}

export default interface Notification {
  id: string;
  creationDatetime?: number;
  senderUserId?: string;
  senderUsername?: string;
  receiverUserId?: string;
  type?: string; // NotificationType Enum
  data?: GameMatchMessage;
}
