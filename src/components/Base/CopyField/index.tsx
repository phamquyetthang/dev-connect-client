import { CopyFieldWrapper } from './style';
import { ReactComponent as CopyIcon } from 'src/assets/icons/copy.svg';
import { FunctionComponent, memo } from 'react';
interface IProps {
  value: string;
  className?: string;
}
const CopyField: FunctionComponent<IProps> = memo(({ value, className }) => {
  function copyToClipboard(e: any) {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
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
