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
  docData: IDoc;
  projectId: string;
};
