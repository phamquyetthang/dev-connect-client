export interface ICreateProjectReq {
  name: string;
  description: string;
  readme?: string;
}

export interface IProjectsListRes {
  _id: string;
  name: string;
  description: string;
  originator: any;
}

export interface IProjectState {
  loading: boolean;
  error: string;
  info?: IProjectInfoRes;
}

export interface IProjectInfoRes {
  _id: string;
  name: string;
  members?: IMember[];
  description: string;
  originator: IOriginator;
  readme?: string;
  files?: IFile[];
  links?: ILink[];
  units?: IUnit[];
  createdAt: Date | string;
}
interface IOriginator {
  id: string;
  name: string;
}
interface IMember {
  member_id: string;
  name: string;
  position: string;
}

interface IUnit {
  unit_id: string;
  name: string;
}

interface IFile {
  title: string;
  file: string;
}

interface ILink {
  title: string;
  file: string;
}
