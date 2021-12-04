import { METHOD_API } from 'src/lib/constants';
import { REQUEST_TYPE } from 'src/lib/constants/options';

export interface IRequest {
  field: string;
  type: string;
  is_require: boolean;
  root: boolean;
  child: string;
}

interface IStatus {
  name: string;
  code: number;
  description: string;
}

export default interface IDoc {
  _id: string;
  title: string;
  method: METHOD_API;
  host: string;
  endpoint: string;
  requestType: REQUEST_TYPE;
  requestBody: object;
  responseType: 'json' | 'text' | 'key_value';
  responseBody: object;
  status: IStatus[];
  description: string;
  members: Array<{
    id_member: string;
    name: string;
  }>;
  extension: string[];
}

export type ICreateDocReq = {
  docData: Omit<IDoc, '_id' | 'status' | 'extension'>;
  projectId: string;
};

export interface IDocHistory {
  author: {
    _id: string;
    first_name: string;
    last_name: string;
  };
  docId: string;
  diff: {
    from: any;
    to: any;
  };
  createdAt: Date;
}
