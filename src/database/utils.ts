import * as firebase from 'firebase/app';
import CollectionName from "../enums/CollectionName";
import Document from "../types/Document";
import { toArray } from "../utils/general";
import Database from "./Database";
import DbGetOpts from "./DbGetOpts";

type AdminDb = FirebaseFirestore.Firestore;
type ClientDb = firebase.firestore.Firestore;
type Query = FirebaseFirestore.Query<FirebaseFirestore.DocumentData> | 
  firebase.firestore.Query<firebase.firestore.DocumentData>;

/**
 * Write data to given collection in db. 
 * @param db Database to write to
 * @param collection Name of collection to write to
 * @param doc Document data to write to db
 */
export function dbWrite(db: AdminDb,  collection: CollectionName, doc: Document): Promise<FirebaseFirestore.WriteResult>;
export function dbWrite(db: ClientDb, collection: CollectionName, doc: Document): Promise<void>;
export function dbWrite(db: Database, collection: CollectionName, doc: Document) {
  return db
    .collection(collection)
    .doc(doc.id)
    .set(doc);
}

/**
 * Update document in db. 
 * @param db Database to update
 * @param collection Name of collection to update
 * @param doc Document data to update existing doc with
 */
export function dbUpdate(db: AdminDb,  collection: CollectionName, doc: Document): Promise<FirebaseFirestore.WriteResult>;
export function dbUpdate(db: ClientDb, collection: CollectionName, doc: Document): Promise<void>;
export function dbUpdate(db: Database, collection: CollectionName, doc: Document) {
  return db
    .collection(collection)
    .doc(doc.id)
    .update(doc);
}

/**
 * Get document from db.
 * @param db Database to get document from
 * @param collection Name of collection to get data from
 * @param docId Id of document to retrieve
 */
export function dbGet(db: AdminDb,  collection: CollectionName, docId: string): Promise<FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>>;
export function dbGet(db: ClientDb, collection: CollectionName, docId: string): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>>;
export function dbGet(db: Database, collection: CollectionName, docId: string) {
  return db
    .collection(collection)
    .doc(docId)
    .get();
}

/**
 * Get multiple documents from db.
 * @param db Database to get gata from
 * @param collection Name of collection to get data from
 * @param opts Object containing possible filters for get query
 * @TODO: check filters to see if they are valid (https://firebase.google.com/docs/firestore/query-data/order-limit-data)
 */
export function dbGetMultiple(db: AdminDb,  collection: CollectionName, opts?: DbGetOpts): Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>
export function dbGetMultiple(db: ClientDb, collection: CollectionName, opts?: DbGetOpts): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>>
export function dbGetMultiple(db: Database, collection: CollectionName, opts: DbGetOpts={}) {
  const ref = db.collection(collection);
  let query: Query = ref;

  // Handle where
  if (opts.where) {
    opts.where = toArray(opts.where);
    for (let i = 0; i < opts.where.length; i++) {
      const where = opts.where[i];
      query = query.where(where.field, where.operator, where.value);
    }
  }
  
  // Handle orderBy
  if (opts.orderBy) {
    opts.orderBy = toArray(opts.orderBy);
    for (let i = 0; i < opts.orderBy.length; i++) {
      const orderBy = opts.orderBy[i];
      query = query.orderBy(orderBy.field, orderBy.direction || 'asc');
    }
  }
  
  // Handle limit
  if (opts.limit) query = query.limit(opts.limit);

  // Return list of documents that satisfy the above filters, if any
  return query.get();
}
