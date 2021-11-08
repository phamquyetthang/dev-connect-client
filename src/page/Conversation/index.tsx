import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { getMyChatsApi } from 'src/services/chat/api';
import { IConversationInfo } from 'src/services/chat/types';
import Conversations from './components/Conversations';
import UsersList from './components/Users';
import { ConversationsWrapper } from './style';

const Conversation = () => {
  const [listChat, setListChat] = useState<IConversationInfo[]>();
  const [conversation, setConversation] = useState<IConversationInfo>({
    id: '',
    name: '',
    lastMess: '',
  });
  const projectId = useAppSelector((state) => state.project.info?._id) || '';

  const handleUser = (conversation: IConversationInfo) => {
    setConversation(conversation);
  };

  const getMyListChat = useCallback(() => {
    getMyChatsApi(projectId).then((res) => {
      setListChat(res);
      if (!conversation.id) {
        setConversation(res[0]);
      }
    });
  }, [conversation.id, projectId]);

  useEffect(() => {
    if (projectId) {
      getMyListChat();
    }
  }, [getMyListChat, projectId]);

  return (
    <ConversationsWrapper id="cs-chatroom">
      <UsersList
        users={listChat || []}
        handleUser={handleUser}
        conversationId={conversation.id}
      />
      <Conversations conversation={conversation} />
    </ConversationsWrapper>
  );
};

export default Conversation;
