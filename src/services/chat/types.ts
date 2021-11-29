export interface IConversationInfo {
  id: string;
  name: string;
  lastMess: string;
  messages?: IMessage[];
  unitId?: string;
}
export interface IMessage {
  _id: string;
  from: {
    _id: string;
    first_name: string;
    last_name: string;
  };
  tag: string[];
  read: boolean;
  text: string;
  show_on_from: boolean;
  show_on_to: boolean;
  date: Date;
}
export interface IConversation {
  _id: string;
  name: string;
  projectId: string;
  unitId: string;
  admin: string[];
  isSingle: boolean;
  members: string[];
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IGetChatFromDocRes {
  listChat: IConversationInfo[];
  newChat: IConversationInfo;
}
