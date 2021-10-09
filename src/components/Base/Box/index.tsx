import { FunctionComponent, memo, ReactNode } from 'react';
import { BoxWrapper } from './style';
interface IProps {
  children: ReactNode;
  onClickBox?: () => void;
  disable?: boolean;
  className?: string;
}
const Box: FunctionComponent<IProps> = memo(
  ({ children, onClickBox, disable = false, className }) => {
    return (
      <BoxWrapper
        {...(!disable && { onClick: onClickBox })}
        className={className}
      >
        {children}
      </BoxWrapper>
    );
  }
);

export default Box;
