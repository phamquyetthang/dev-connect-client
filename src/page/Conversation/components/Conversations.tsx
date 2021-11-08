import { uniqueId } from 'lodash';
import {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import EmojiPicker from 'src/components/Base/EmojiPicker';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { formatTimeMess } from 'src/lib/helpers';
import { createAppErr } from 'src/services/app';
import { getChatContentApi, sendMessApi } from 'src/services/chat/api';
import { IConversationInfo, IMessage } from 'src/services/chat/types';
import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg';
import { ReactComponent as DotsIcon } from 'src/assets/icons/dots.svg';
import { ReactComponent as UserIcon } from 'src/assets/icons/user.svg';
import { ReactComponent as PictureIcon } from 'src/assets/icons/picture.svg';
import { ReactComponent as ClipIcon } from 'src/assets/icons/clip.svg';
import { ReactComponent as SendIcon } from 'src/assets/icons/paper-plane.svg';

import { ChatContainerWrapper } from '../style';
interface IProps {
  conversation: IConversationInfo;
}
type IMess = IMessage & { isShowAvt: boolean };

const Conversations: FunctionComponent<IProps> = ({ conversation }) => {
  const [listMess, setListMess] = useState<IMess[]>([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState('');
  const useId = useAppSelector((state) => state.user._id);

  const handleEmoji = () => {
    setShowEmoji(() => !showEmoji);
  };
  const pickEmoji = async (e: any) => {
    let sym = e.unified.split('-');
    let codesArray: any = [];
    sym.forEach((el: any) => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMessage(() => message + emoji);
  };

  const dispatch = useDispatch();
  const checkShowAvtMessage = (messages: IMessage[]) => {
    const listChats = messages.reduce<IMess[]>(
      (previousValue, currentValue, currentIndex, array) => {
        if (currentIndex) {
          if (
            currentValue?.from._id === array[currentIndex - 1]?.from._id &&
            formatTimeMess(currentValue.date) ===
              formatTimeMess(array[currentIndex - 1].date)
          ) {
            previousValue.push({ ...currentValue, isShowAvt: false });
          } else {
            previousValue.push({ ...currentValue, isShowAvt: true });
          }
        } else {
          previousValue.push({ ...currentValue, isShowAvt: true });
        }

        return previousValue;
      },
      []
    );
    return listChats;
  };

  const getListChat = useCallback(() => {
    getChatContentApi(conversation.id)
      .then((res) => {
        setListMess(checkShowAvtMessage(res.messages));
      })
      .catch((err) => dispatch(createAppErr({ title: err })));
  }, [conversation.id, dispatch]);

  useEffect(() => {
    if (conversation.id) {
      getListChat();
    }
  }, [conversation.id, getListChat]);

  const sendMess = () => {
    sendMessApi(conversation.id, message).then((res) => {
      setListMess(checkShowAvtMessage(res.messages));
      setMessage('');
    });
  };
  const handleType = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleKeyEvent = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        setMessage(message + '\n');
      } else {
        event.preventDefault();
        sendMess();
      }
    }
  };

  return (
    <ChatContainerWrapper>
      <div className="cs-chat-box-head">
        <div>
          <div className="cs-avt">
            <span>CS</span>
          </div>
          <h5>{conversation.name}</h5>
          <span className="cs-avt-status"></span>
        </div>
        <div className="cs-chat-icons-tool">
          <SearchIcon />
          <UserIcon />
          <DotsIcon />
        </div>
      </div>
      <div className="cs-chat-box-contain " id="chat-box-contain">
        {!!listMess.length &&
          listMess.map((i: IMess) => (
            <div
              className={`cs-message
               ${i.from._id === useId ? ' cs-m-end' : ''}`}
              key={uniqueId('message_')}
            >
              <div className={`cs-avt ${i.isShowAvt ? '' : ' cs-hidden-avt'}`}>
                <span>\ww</span>
              </div>
              <div>
                <p style={{ whiteSpace: 'pre-line' }}>{i.text}</p>
                {!!i.isShowAvt && (
                  <i>
                    {i.from.first_name} {i.from.last_name}{' '}
                    {formatTimeMess(i?.date)}
                  </i>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="cs-chat-box-type cs-chat-box-head">
        <div>
          <TextareaAutosize
            autoFocus
            placeholder="Enter message..."
            value={message}
            onChange={handleType}
            onKeyPress={handleKeyEvent}
          />
        </div>
        <div className="cs-chat-icons-tool">
          <i style={{ fontStyle: 'normal' }} onClick={handleEmoji}>
            🙂
          </i>
          <PictureIcon />
          <ClipIcon />
          <button onClick={sendMess}>
            <SendIcon />
          </button>
        </div>
      </div>
      <EmojiPicker
        onClick={pickEmoji}
        className="cs-emoji-list"
        isShow={showEmoji}
        onClose={() => setShowEmoji(false)}
      />
    </ChatContainerWrapper>
  );
};

export default Conversations;
