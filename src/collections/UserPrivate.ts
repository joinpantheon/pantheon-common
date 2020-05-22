export default interface UserPrivate {
  id: string; // needs to be unique
  username: string; // needs to be unique
  city?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  name?: string; // deprecated, need to change users in actual firebase db
  rating?: number; // Internal elo rating (ex. 1200)
  school?: string;
  state?: string;
  referrer?: string;
  creationDatetime?: number;
}
