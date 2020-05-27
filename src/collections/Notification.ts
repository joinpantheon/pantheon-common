import NotificationType from "../enums/NotificationType";
import Subject from "../enums/Subject";

interface GameMatchMessage {
  matchId: string;
  subject?: Subject;
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
