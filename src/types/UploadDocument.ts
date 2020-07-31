import { FieldValue } from '@google-cloud/firestore';
import Document from './Document';

type Upload = {
  id: string;
  [key: string]: any | FieldValue;
}

type UploadDocument<T> = Document<T> | Upload;

export default UploadDocument;