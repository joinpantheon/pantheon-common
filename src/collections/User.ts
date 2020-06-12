import * as firebase from 'firebase';
import Division from "../enums/Division";
import Tier from "../enums/Tier";

export interface Rank {
  tier?: Tier; // Ex. Bronze
  division?: Division; // Division within tier [1-4]
  points?: number; // Within tier and division [0-100]
}

export default interface User {
  // required on signup
  id: string; // needs to be unique
  username: string; // unique, but changeable
  normalizedUsername: string; // lowercase version for search   
  school?: string;
  city?: string;
  state?: string;

  // optional on signup
  firstName?: string;
  lastName?: string; 

  rank?: Rank;
  creationDatetime?: number;
  serverTimestamp?: firebase.firestore.Timestamp;
}