import { FieldValue } from "@google-cloud/firestore";
import Document from "./Document";

type Upload = {
  id: string;
  [key: string]: string | FieldValue;
}

type UploadDocument = Document | Upload;

export default UploadDocument;