import { getService } from 'src/lib/helpers/connectApi';
const endpoint = '/tasks';

export function getListTaskApi(
  projectId: string,
  page?: number,
  searchKey?: string
) {
  return getService(endpoint, { projectId, page, searchKey });
}
