import { FunctionComponent, ReactNode } from 'react';
import HeaderPage from '../HeaderPage';
import { FullPageModalWrapper } from './styles';
interface IProps {
  isShow: boolean;
  title: string;
  btnTitle: string;
  handleDismiss: () => void;
  handleClickSubmit: () => void;
  children: ReactNode;
}
const FullPageModal: FunctionComponent<IProps> = ({
  isShow,
  title,
  btnTitle,
  handleDismiss,
  handleClickSubmit,
  children,
}) => {
  return (
    <FullPageModalWrapper className={`fullModal${isShow ? ' show': ''}`}>
      <HeaderPage
        title={title}
        btnTitle={btnTitle}
        handleClickSubmit={handleClickSubmit}
        handleDismiss={handleDismiss}
      />
      <div className="fullModal__body">
      {children}
      </div>
      
    </FullPageModalWrapper>
  );
};

export default FullPageModal;
