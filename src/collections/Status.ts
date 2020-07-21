import { ServerValue } from '@firebase/database-types';
import { FieldValue } from '@firebase/firestore-types';
import State from '../enums/State';

export default interface Status {
  lastChanged: FieldValue | ServerValue;
  state: State;
  userId: string;
  username: string;
}
