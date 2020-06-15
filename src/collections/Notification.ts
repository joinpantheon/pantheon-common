import GameSubject from "../enums/GameSubject";
import NotificationType from "../enums/NotificationType";

interface GameMatchMessage {
  matchId: string;
  subjects?: GameSubject[];
  requestAccepted?: boolean;
}

export default interface Notification {
  id: string;
  creationDatetime?: number;
  senderUserId?: string;
  senderUsername?: string;
  receiverUserId?: string;
  type?: NotificationType;
  data?: GameMatchMessage;
}
