import * as firebase from 'firebase/app';
import CollectionName from "../enums/CollectionName";
import Document from "../types/Document";
import { toArray } from "../utils/general";
import Database from "./Database";
import DbGetOpts from "./DbGetOpts";

/**
 * Write data to given collection in db. 
 * @param db Database to write to
 * @param collection Name of collection to write to
 * @param doc Document data to write to db
 */
export function dbWrite(db: Database, collection: CollectionName, 
    doc: Document): Promise<void> {
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
export function dbUpdate(db: Database, collection: CollectionName, 
    doc: Document): Promise<void> {
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
 * TODO: check filters to see if they are valid (https://firebase.google.com/docs/firestore/query-data/order-limit-data)
 */
export function dbGetMultiple(db: Database, collection: CollectionName, 
    opts: DbGetOpts={}) {
  const ref = db.collection(collection);
  let query: firebase.firestore.Query<firebase.firestore.DocumentData> = ref;

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

/**
 * Copy collection from one db to another.
 * @param db1 Database to copy data from
 * @param db2 Database to copy data to
 * @param collection Collection name
 */
export async function dbCopyCollection(db1: Database, db2: Database, 
    collection: CollectionName) {
  const snapshot = await dbGetMultiple(db1, collection);
  const writes = snapshot.docs.map(doc => 
    dbWrite(db2, collection, doc.data() as Document));
  return Promise.all(writes);
}
