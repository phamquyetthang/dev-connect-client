import React, { FunctionComponent, memo, useMemo } from 'react';
import { ReactComponent as ListIcon } from 'src/assets/icons/list.svg';
import { ReactComponent as ChatIcon } from 'src/assets/icons/chat.svg';
import { ReactComponent as BellIcon } from 'src/assets/icons/bell.svg';
// import { METHOD_API } from 'src/lib/constants';
import { APIBoxWrapper } from './style';
import CopyField from 'src/components/Base/CopyField';
import IDoc from 'src/services/doc/types';
import ProgressBar from 'src/components/Base/Progress';
import ListAvt from 'src/components/Base/ListAvt';
import IconHover from 'src/components/Base/IconHover';
interface IProps {
  docData: IDoc;
  onClickBox?: () => void;
}
const APIBox: FunctionComponent<IProps> = memo(({ docData, onClickBox }) => {
  const { title, method, host, endpoint, members } = docData;
  const styleClass = useMemo(() => {
    return method;
  }, [method]);

  return (
    <APIBoxWrapper className={styleClass} onClick={onClickBox}>
      <div className="ApiBox__basic">
        <span>{title}</span>
        <div className="ApiBox__basic__url">
          <span className="ApiBox__basic__url_method">{method}</span>
          <CopyField value={host} />
          <CopyField value={endpoint} />
        </div>
      </div>

      <ProgressBar percent="32%" width={120} />
      <ListAvt
        people={members.map((item) => ({
          name: item.name,
          id: item.id_member,
        }))}
      />
      <IconHover>
        <ListIcon/>
      </IconHover>
      <IconHover>
        <ChatIcon/>
      </IconHover>
      <IconHover>
        <BellIcon/>
      </IconHover>
    </APIBoxWrapper>
  );
});

export default APIBox;
