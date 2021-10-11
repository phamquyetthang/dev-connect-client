import { getService, postService } from 'src/lib/helpers/connectApi';
import { ICreateDocReq } from './types';
const endpoint = '/doc';

export const getListDocsApi = (projectId: string) => {
  return getService(endpoint, {projectId})
}

export const createDocApi = (req: ICreateDocReq) => {
  return postService(endpoint, req);
};
