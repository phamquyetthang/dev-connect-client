import { CopyFieldWrapper } from './style';
import { ReactComponent as CopyIcon } from 'src/assets/icons/copy.svg';
import { FunctionComponent, memo } from 'react';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addSnackBar } from 'src/services/app';
interface IProps {
  value: string;
  className?: string;
}
const CopyField: FunctionComponent<IProps> = memo(({ value, className }) => {
  const dispatch = useAppDispatch();
  function copyToClipboard(e: any) {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    dispatch(addSnackBar({ type: 'info', message: 'Copied to clipboard !' }));
  }

  return (
    <CopyFieldWrapper className={className} onClick={copyToClipboard}>
      <button className="copy-btn" onClick={copyToClipboard}>
        <CopyIcon />
      </button>
      <p>{value}</p>
    </CopyFieldWrapper>
  );
});

export default CopyField;
