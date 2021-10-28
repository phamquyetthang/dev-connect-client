import React, { FunctionComponent } from 'react';
// import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg';
import Skeleton from 'react-loading-skeleton';
import { IConversationInfo } from 'src/services/chat/types';
import { UserChatListWrapper } from '../style';
interface IProps {
  users: IConversationInfo[];
  conversationId: string;
  handleUser: (i: any) => void;
}
const UsersList: FunctionComponent<IProps> = ({ users, conversationId, handleUser }) => {
  return (
    <UserChatListWrapper>
      <h3>CS Chat</h3>
      <div className="cs-search-bar">
        <i className="fi-rr-search"></i>
        <input type="text" placeholder="Type to search" />
      </div>
      <div className="cs-list-user">
        {users ? (
          users?.map((i) => (
            <div className={`cs-one-user${i.id === conversationId ? ' selected' : ''}`} onClick={() => handleUser(i)}>
              <div className="cs-avt">
                <span>{i.name?.slice(0, 1)}</span>
                <span className="cs-avt-status"></span>
              </div>
              <div>
                <h5>{i.name}</h5>
                <p>{i.lastMess}</p>
              </div>
            </div>
          ))
        ) : (
          <Skeleton count={10} />
        )}
      </div>
    </UserChatListWrapper>
  );
};

export default UsersList;
