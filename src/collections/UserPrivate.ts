import { FieldValue } from '@firebase/firestore-types';

export default interface UserPrivate {
  id: string; // needs to be unique
  userId: string;
  creationDatetime?: number;
  email?: string;
  honor?: number; // Measure of sportsmanship [0, 1]
  rating?: number; // Internal elo rating (ex. 1200)
  referrer?: string;
  serverTimestamp?: FieldValue;
}
