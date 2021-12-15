import {
  getService,
  postService,
  putService,
} from 'src/lib/helpers/connectApi';
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

export function getProjectMemberApi(id: string){
  return getService(`${endpoint}/members/${id}`)
}

export function addMember(email: string, projectId: string) {
  return putService(endpoint + '/addMember', { email, projectId });
}

