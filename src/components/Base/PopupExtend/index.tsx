import React, { FunctionComponent, memo, ReactNode } from 'react';
import { PopupExtendWrapper } from './style';

interface IProps {
  visible?: boolean;
  onToggle: () => void;
  displayElement: ReactNode;
  popupElement: ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

const PopupExtend: FunctionComponent<IProps> = memo(
  ({
    displayElement,
    popupElement,
    position = 'left',
    visible = false,
    onToggle,
  }) => {
    return (
      <PopupExtendWrapper>
        <div className="displayElement" onClick={onToggle}>
          {displayElement}
        </div>
        <div className={`popupElement${visible ? ' show' : ''} ${position}`}>
          {popupElement}
        </div>
      </PopupExtendWrapper>
    );
  }
);

export default PopupExtend;
