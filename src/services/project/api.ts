import { getService, postService } from 'src/lib/helpers/connectApi';
import { ICreateProjectReq, IProjectsListRes } from './types';

export const createProjectApi = (req: ICreateProjectReq) => {
  return postService('/project', req);
};

export function getProjectsApi(): Promise<IProjectsListRes[]> {
  return getService('/project');
}
