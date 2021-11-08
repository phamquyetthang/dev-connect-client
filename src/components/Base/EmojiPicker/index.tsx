import { Picker, EmojiData } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import React, {
  FunctionComponent,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
interface IProps {
  onClick: (emoji: EmojiData) => void;
  isShow: boolean;
  onClose: () => void;
  className?: string;
}
const EmojiPicker: FunctionComponent<IProps> = memo(
  ({ onClick = null, isShow, onClose, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const handleClickOutSide = useCallback(
      (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          if (isShow) {
            onClose();
          }
        }
      },
      [isShow, onClose]
    );
    useEffect(() => {
      document.addEventListener('click', handleClickOutSide, true);
      return () => {
        document.removeEventListener('click', handleClickOutSide, true);
      };
    }, [handleClickOutSide]);

    return (
      <div ref={ref} className={className}>
        {isShow && <Picker onSelect={onClick || undefined} />}
      </div>
    );
  }
);
export default EmojiPicker;
export type { EmojiData };
