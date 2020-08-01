import { FieldValue } from "@google-cloud/firestore";

type UploadDocument<T> = {
  [K in keyof T]: T[K] | FieldValue;
}

export default UploadDocument;