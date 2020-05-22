interface GameMatchMessage {
    matchId: string;
    subject?: string;
    requestAccepted?: boolean;
}
export default interface Notification {
    id: string;
    creationDatetime?: number;
    senderUserId?: string;
    senderUsername?: string;
    receiverUserId?: string;
    type?: string;
    data?: GameMatchMessage;
}
export {};
