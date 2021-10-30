import { useEffect, useState } from 'react';
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

  //   useEffect(() => {
  //     const objDiv = document.getElementById(
  //       'chat-box-contain'
  //     ) as HTMLDivElement;
  //     objDiv.scrollTop = objDiv.scrollHeight;
  //   }, []);

  const handleUser = (conversation: IConversationInfo) => {
    setConversation(conversation);
  };

  const getMyListChat = () => {
    getMyChatsApi().then((res) => {
      setListChat(res);
      if (!conversation.id) {
        setConversation(res[0]);
      }
    });
  };
  useEffect(() => {
    getMyListChat();
  }, []);

  return (
    <ConversationsWrapper id="cs-chatroom">
      <UsersList users={listChat || []} handleUser={handleUser} conversationId={conversation.id} />
      <Conversations conversation={conversation} />
    </ConversationsWrapper>
  );
};

export default Conversation;
