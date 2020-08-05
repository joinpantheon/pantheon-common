import {
  DocumentData as ClientDocumentData,
  DocumentSnapshot as ClientDocumentSnapshot,
  Query as ClientQuery,
  QuerySnapshot as ClientQuerySnapshot
} from '@firebase/firestore-types';
import {
  DocumentData as AdminDocumentData,
  DocumentSnapshot as AdminDocumentSnapshot,
  Query as AdminQuery,
  QuerySnapshot as AdminQuerySnapshot,
  WriteResult
} from '@google-cloud/firestore';
import CollectionName from '../enums/CollectionName';
import Document from '../types/Document';
import UploadDocument from '../types/UploadDocument';
import { toArray } from '../utils/general';
import { AdminDb, ClientDb, Database } from './Database';
import DbGetOpts from './DbGetOpts';

/**
 * Write data to given collection in db. 
 * @param db Database to write to
 * @param collection Name of collection to write to
 * @param doc Document data to write to db
 */
export function dbWrite<T extends CollectionName>(db: AdminDb,  collection: T, doc: Document<T>): Promise<WriteResult>;
export function dbWrite<T extends CollectionName>(db: ClientDb, collection: T, doc: Document<T>): Promise<void>;
export function dbWrite<T extends CollectionName>(db: Database, collection: T, doc: Document<T>) {
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
export function dbUpdate<T extends CollectionName>(db: AdminDb,  collection: T, doc: UploadDocument<Document<T>>): Promise<WriteResult>;
export function dbUpdate<T extends CollectionName>(db: ClientDb, collection: T, doc: UploadDocument<Document<T>>): Promise<void>;
export function dbUpdate<T extends CollectionName>(db: Database, collection: T, doc: UploadDocument<Document<T>>) {
  return db
    .collection(collection)
    .doc(doc.id)
    .update(doc);
}

/**
 * Delete document from db.
 * @param db Database to delete document from
 * @param collection Name of collection to delete doc from
 * @param docId Id of document to delete
 */
export function dbDelete(db: AdminDb,  collection: CollectionName, docId: string): Promise<WriteResult>;
export function dbDelete(db: ClientDb, collection: CollectionName, docId: string): Promise<void>;
export function dbDelete(db: Database, collection: CollectionName, docId: string) {
  return db
    .collection(collection)
    .doc(docId)
    .delete();
}

/**
 * Get document from db.
 * @param db Database to get document from
 * @param collection Name of collection to get data from
 * @param docId Id of document to retrieve
 */
export function dbGet(db: AdminDb,  collection: CollectionName, docId: string): Promise<AdminDocumentSnapshot<AdminDocumentData>>;
export function dbGet(db: ClientDb, collection: CollectionName, docId: string): Promise<ClientDocumentSnapshot<ClientDocumentData>>;
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
export function dbGetMultiple(db: AdminDb,  collection: CollectionName, opts?: DbGetOpts): Promise<AdminQuerySnapshot<AdminDocumentData>>
export function dbGetMultiple(db: ClientDb, collection: CollectionName, opts?: DbGetOpts): Promise<ClientQuerySnapshot<ClientDocumentData>>
export function dbGetMultiple(db: Database, collection: CollectionName, opts: DbGetOpts={}) {
  const ref = db.collection(collection);
  type Query = AdminQuery<AdminDocumentData> | ClientQuery<ClientDocumentData>;
  let query: Query = ref;

  // Handle where
  if (opts.where) {
    const whereOpts = toArray(opts.where);
    for (let i = 0; i < whereOpts.length; i++) {
      const where = whereOpts[i];
      query = query.where(where.field, where.operator, where.value);
    }
  }
  
  // Handle orderBy
  if (opts.orderBy) {
    const orderByOpts = toArray(opts.orderBy);
    for (let i = 0; i < orderByOpts.length; i++) {
      const orderBy = orderByOpts[i];
      query = query.orderBy(orderBy.field, orderBy.direction || 'asc');
    }
  }
  
  // Handle limit
  if (opts.limit) query = query.limit(opts.limit);

  // Return list of documents that satisfy the above filters, if any
  return query.get();
}
