import { FunctionComponent, ReactNode, useRef } from 'react';
import Button from '../Button';
import { ModalWrapper } from './style';

interface IProps {
  isShow: boolean;
  title: string;
  children: ReactNode;
  closeBtn: string;
  submitBtn?: string;
  onClose: () => void;
  onSubmit?: () => void;
}

const Modal: FunctionComponent<IProps> = ({
  isShow,
  title,
  children,
  closeBtn,
  submitBtn,
  onClose,
  onSubmit,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const clickOutSide = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isShow) {
        onClose();
      }
    }
  };

  return (
    <ModalWrapper className={isShow ? ' show' : ''} onClick={clickOutSide}>
      <div className="modal" ref={ref}>
        <p className="modal__header">{title}</p>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <Button title={closeBtn} onClick={onClose} />
          {submitBtn && onSubmit ? (
            <Button title={submitBtn} onClick={onSubmit} />
          ) : null}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
