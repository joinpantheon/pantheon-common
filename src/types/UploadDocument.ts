import { FieldValue } from "@google-cloud/firestore";
import { AnyDocument } from "./Document";

/**
 * Represents given collection object where any property (except `id`) can
 * also be of type `FieldValue`.
 */
type UploadDocument<T extends AnyDocument> = 
  Omit<{ [K in keyof T]: T[K] | FieldValue; }, 'id'> & { id: string };

export default UploadDocument;