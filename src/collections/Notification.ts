import GameSubject from '../enums/GameSubject';
import NotificationType from '../enums/NotificationType';

interface GameMatchMessage {
  matchId: string;
  requestAccepted?: boolean;
  subjects?: GameSubject[];
}

export default interface Notification {
  id: string;
  creationDatetime?: number;
  data?: GameMatchMessage;
  receiverUserId?: string;
  senderUserId?: string;
  senderUsername?: string;
  type?: NotificationType;
}
