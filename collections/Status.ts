import * as firebase from 'firebase';
import State from '../enums/State';

export default interface Status {
  userId: string;
  lastChanged: firebase.firestore.Timestamp;
  state: State;
}