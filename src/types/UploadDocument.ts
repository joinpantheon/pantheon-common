import { FieldValue } from "@google-cloud/firestore";
import { AnyDocument } from "./Document";

type Upload = {
  id: string;
  [key: string]: string | FieldValue;
}

type UploadDocument = AnyDocument | Upload;

export default UploadDocument;