export interface ITodoItem {
  status: boolean;
  _id: string;
  user_id: string;
  number: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deadline?: Date;
}

export interface IEditTodoReq {
  id: string;
  status?: boolean;
  title?: string;
  description?: string;
  deadline?: Date;
}
