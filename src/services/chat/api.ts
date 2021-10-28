import { getService, postService } from 'src/lib/helpers/connectApi';

const endpoint = '/chat';

export const getMyChatsApi = () => {
  return getService(endpoint);
};

export const getChatContentApi = (id: string) => {
  return getService(`${endpoint}/${id}`);
};

export const sendMessApi = (conversationId: string, text: string) => {
  return postService(endpoint, { conversationId, text });
};
