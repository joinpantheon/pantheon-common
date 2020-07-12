import { FieldValue } from "@firebase/firestore-types";
import Division from "../enums/Division";
import Tier from "../enums/Tier";

export interface Rank {
  tier?: Tier; // Ex. Bronze
  division?: Division; // Division within tier [1-4]
  points?: number; // Within tier and division [0-100]
}

export default interface User {
  id: string; // needs to be unique
  username: string; // unique, but changeable
  normalizedUsername: string; // lowercase version for search   
  city?: string;
  creationDatetime?: number;
  firstName?: string;
  lastName?: string; 
  rank?: Rank;
  school?: string;
  serverTimestamp?: FieldValue;
  state?: string;
}
