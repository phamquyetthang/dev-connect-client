import { FunctionComponent, useMemo } from 'react';
import CopyField from 'src/components/Base/CopyField';
import Modal from 'src/components/Base/Modal';
import VerticalTab from 'src/components/Base/VerticalTab';
import IDoc from 'src/services/doc/types';
import { ReactComponent as VectorIcon } from 'src/assets/icons/vector.svg';
import { ReactComponent as CodeIcon } from 'src/assets/icons/code.svg';
import { ReactComponent as ListIcon } from 'src/assets/icons/list.svg';
import { ReactComponent as LabIcon } from 'src/assets/icons/lab.svg';
import { ReactComponent as DocumentIcon } from 'src/assets/icons/document.svg';
import { ReactComponent as PeopleIcon } from 'src/assets/icons/people.svg';
import { ReactComponent as BellIcon } from 'src/assets/icons/bell.svg';
import { ReactComponent as TimeIcon } from 'src/assets/icons/time-past.svg';
import { DetailApiModalWrapper } from './style';
import { DocTranslateKeyType } from 'src/lib/translations/vn/doc';
import CodeSnippet from './CodeSnippet';
interface IProps {
  isShow: boolean;
  onClose: () => void;
  data: IDoc;
  words: (title: DocTranslateKeyType) => string;
}

const DetailApiModal: FunctionComponent<IProps> = ({
  isShow,
  onClose,
  data,
  words,
}) => {
  const TAB = useMemo(
    () => [
      { key: 1, tab: <h1>hello</h1> },
      {
        key: 2,
        tab: <CodeSnippet {...data} />,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const MENU = useMemo(
    () => [
      { key: 1, label: words('description'), icon: <VectorIcon /> },
      { key: 2, label: words('code'), icon: <CodeIcon /> },
      { key: 3, label: words('lab'), icon: <LabIcon /> },
      { key: 4, label: words('tasks'), icon: <ListIcon /> },
      { key: 5, label: words('document'), icon: <DocumentIcon /> },
      { key: 6, label: words('members'), icon: <PeopleIcon /> },
      { key: 7, label: words('notification'), icon: <BellIcon /> },
      { key: 8, label: words('history'), icon: <TimeIcon /> },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Modal
      title={`API: ${data.title}`}
      isShow={isShow}
      onClose={onClose}
      closeBtn="Close"
    >
      <DetailApiModalWrapper>
        <div className="detailApi__url">
          URL:
          <CopyField value={data.host} />
          <CopyField value={data.endpoint} />
        </div>
        <VerticalTab tabs={TAB} menu={MENU} className="detailApi__info" />
      </DetailApiModalWrapper>
    </Modal>
  );
};

export default DetailApiModal;
