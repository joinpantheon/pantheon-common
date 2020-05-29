import Message from "./Message";
export default interface Chat {
    id: string;
    gameId?: string;
    creationDatetime?: number;
    messages?: Message[];
}
