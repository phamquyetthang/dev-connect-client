import { FunctionComponent, memo, ReactNode } from 'react';
import { ReactComponent as BackIcon } from 'src/assets/icons/back.svg';
import Button from '../Button';
import { HeaderPageWrapper } from './style';
interface IProps {
  title: string;
  btnTitle?: string;
  children?: ReactNode;
  handleClickSubmit?: () => void;
  handleDismiss?: () => void;
  disableSubmit?: boolean;
}
const HeaderPage: FunctionComponent<IProps> = memo(
  ({
    title,
    btnTitle,
    children,
    handleClickSubmit,
    handleDismiss,
    disableSubmit,
  }) => {
    const renderRightElement = () => {
      if (children) {
        return children;
      }
      if (!!btnTitle && !!handleClickSubmit) {
        return (
          <Button
            title={btnTitle}
            onClick={handleClickSubmit}
            disable={disableSubmit}
          />
        );
      }
    };

    return (
      <HeaderPageWrapper>
        <BackIcon onClick={handleDismiss} />
        <h3>{title}</h3>
        <div></div>
        <div className="right-btn">{renderRightElement()}</div>
      </HeaderPageWrapper>
    );
  }
);

export default HeaderPage;
