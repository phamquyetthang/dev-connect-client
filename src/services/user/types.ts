export type IUserState = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  project_id?: string;
  position?: string;
  permissions?: string[];
  createdAt: Date | string;
  preferences?: IUserPreferences;
};
export default interface IUserPreferences {
  userId: string;
  theme: string;
  language: string;
  snippets: Array<{
    name: string;
    template: string;
    isDefault: boolean;
  }>;
}
