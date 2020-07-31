import { Firestore } from '@google-cloud/firestore';
import { firestore } from 'firebase';

type AdminDb = Firestore;
type ClientDb = firestore.Firestore;
type Database = AdminDb | ClientDb;

export { AdminDb, ClientDb, Database };
