export interface ICreateProjectReq{
    name: string;
    description: string;
    readme?:string;
}

export interface IProjectsListRes{
    _id: string;
    name: string;
    description: string;
    originator: any;
}