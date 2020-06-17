import * as firebase from 'firebase/app';

type AdminDb = FirebaseFirestore.Firestore;
type ClientDb = firebase.firestore.Firestore;
type Database = firebase.firestore.Firestore | FirebaseFirestore.Firestore;

export { AdminDb, ClientDb, Database };
