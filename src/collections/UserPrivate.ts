import { FieldValue } from "@firebase/firestore-types";

export default interface UserPrivate {
  id: string; // needs to be unique
  userId: string;
  referrer?: string;
  creationDatetime?: number;
  serverTimestamp?: FieldValue;
  email?: string;
  rating?: number; // Internal elo rating (ex. 1200)
  honor?: number; // Measure of sportsmanship [0, 1]
}
