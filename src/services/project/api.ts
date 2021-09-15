import { getService, postService } from 'src/lib/helpers/connectApi';
import { ICreateProjectReq, IProjectInfoRes, IProjectsListRes } from './types';
const endpoint = '/project';
export const createProjectApi = (req: ICreateProjectReq) => {
  return postService(endpoint, req);
};

export function getProjectsApi(): Promise<IProjectsListRes[]> {
  return getService(endpoint);
}

export function getInfoProjectApi(id: string): Promise<IProjectInfoRes> {
  return getService(`${endpoint}/${id}`);
}
