import { FieldValue } from "@google-cloud/firestore";
import Document from "./Document";
declare type Upload = {
    id: string;
    [key: string]: string | FieldValue;
};
declare type UploadDocument = Document | Upload;
export default UploadDocument;
