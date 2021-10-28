import {
  ChangeEvent,
  FunctionComponent,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import EmojiPicker from 'src/components/Base/EmojiPicker';
import { createAppErr } from 'src/services/app';
import { getChatContentApi, sendMessApi } from 'src/services/chat/api';
import { IConversationInfo } from 'src/services/chat/types';
import { ChatContainerWrapper } from '../style';
interface IProps {
  conversation: IConversationInfo;
}
const Conversations: FunctionComponent<IProps> = ({ conversation }) => {
  const [listMess, setListMess] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState('');

  //   useEffect(() => {
  //     const socket = socketIOClient(ENDPOINT);
  //     socket.on('connect', (res) => console.log('hello server', res));
  //     socket.emit('message', 'message');
  //   }, []);

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

  useEffect(() => {
    if (conversation.id) {
      getChatContentApi(conversation.id)
        .then((res) => setListMess(res.messages))
        .catch((err) => dispatch(createAppErr({ title: err })));
    }
  }, [conversation.id, dispatch]);

  const sendMess = () => {
    sendMessApi(conversation.id, message).then((res) => {
      setListMess(res.messages);
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
          <i className="fi-rr-search"></i>
          <i className="fi-rr-video-camera"></i>
          <i className="fi-rr-user"></i>
          <i className="fi-rr-menu-dots"></i>
        </div>
      </div>
      {JSON.stringify(conversation)}
      <div className="cs-chat-box-contain " id="chat-box-contain">
        {!!listMess.length &&
          listMess.map((i: any) => (
            <div
              // className={`cs-message
              //  ${
              //   i.from === conversation.id ? ' cs-m-end' : ''
              // }`}
              className="cs-message"
            >
              <div className={`cs-avt`}>
                <span>CS</span>
              </div>
              <div>
                <p style={{ whiteSpace: 'pre-line' }}>{i.text}</p>
                <i>{i?.date}</i>
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
            // onKeyDown={sendMess}
          />
        </div>
        <div className="cs-chat-icons-tool">
          <i style={{ fontStyle: 'normal' }} onClick={handleEmoji}>
            🙂
          </i>
          <i className="fi-rr-picture"></i>
          <i className="fi-rr-clip"></i>
          <button onClick={sendMess}>
            <i className="fi-rr-paper-plane"></i>
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
