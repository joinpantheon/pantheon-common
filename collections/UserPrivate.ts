export default interface UserPrivate {
  id: string;
  city?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  name?: string; // deprecated, need to change users in actual firebase db
  username?: string;
  rating?: number; // Internal elo rating (ex. 1200)
  school?: string;
  state?: string;
  referrer?: string;
  creationDatetime?: number;
}
