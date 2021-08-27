import { FunctionComponent, memo, useCallback, useEffect } from 'react';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close.svg';
import { ReactComponent as TickIcon } from 'src/assets/icons/tick.svg';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { closeSnackBar } from 'src/services/app';
interface IProps {
  type: string;
  message: string;
  id: string;
}
const SnackBarItem: FunctionComponent<IProps> = memo(
  ({ type, message, id }) => {
    const dispatch = useAppDispatch();

    const onClose = useCallback(() => {
      dispatch(closeSnackBar(id));
    }, [dispatch, id]);

    useEffect(() => {
      setTimeout(() => onClose(), 3000);
    }, [id, onClose]);

    return (
      <div className={`snack ${type}`}>
        <div className="status">
          <TickIcon width={8} height={8} />
          <span>{message}</span>
        </div>
        <CloseIcon width={16} height={16} onClick={onClose} />
      </div>
    );
  }
);

export default SnackBarItem;
