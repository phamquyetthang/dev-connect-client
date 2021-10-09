export type IUserState = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  project_id?: string;
  position?: string;
  permissions?: string[];
  createdAt: Date | string;
};
