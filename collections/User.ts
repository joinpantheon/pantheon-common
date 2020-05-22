import Division from "../enums/Division";
import Tier from "../enums/Tier";

export interface Rank {
  tier?: Tier; // Ex. Bronze
  division?: Division; // Division within tier [1-4]
  points?: number; // Within tier and division [0-100]
}

export default interface User {
  id: string; // needs to be unique
  username: string; // needs to be unique
  creationDatetime?: number;
  city?: string;
  experience?: number; // Measure of W/L ratio + time spent [0, inf)
  honor?: number; // Measure of sportsmanship [0, 1]
  rank?: Rank;
  school?: string;
  state?: string;
}

// TODO?: should honor be private?
