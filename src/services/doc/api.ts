import { postService } from 'src/lib/helpers/connectApi';
import { ICreateDocReq } from './types';
const endpoint = '/doc';
export const createDocApi = (req: ICreateDocReq) => {
  return postService(endpoint, req);
};
