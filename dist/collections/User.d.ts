import Division from "../enums/Division";
import Tier from "../enums/Tier";
export interface Rank {
    tier?: Tier;
    division?: Division;
    points?: number;
}
export default interface User {
    id: string;
    username: string;
    creationDatetime?: number;
    city?: string;
    experience?: number;
    honor?: number;
    rank?: Rank;
    school?: string;
    state?: string;
}
