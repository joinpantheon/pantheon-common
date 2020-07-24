import { FieldValue } from '@firebase/firestore-types';
import State from '../enums/State';

export default interface Status {
  lastChanged: FieldValue | Object;
  state: State;
  userId: string;
  username: string;
}
