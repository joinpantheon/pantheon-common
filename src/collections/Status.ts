import { FieldValue } from "@firebase/firestore-types";
import State from '../enums/State';

export default interface Status {
  userId: string;
  lastChanged: FieldValue;
  state: State;
}
