import MessageType from '../enums/MessageType';
export default interface Message {
    id: string;
    content?: string;
    creationDatetime?: number;
    userId?: string;
    username?: string;
    messageType?: MessageType;
}
