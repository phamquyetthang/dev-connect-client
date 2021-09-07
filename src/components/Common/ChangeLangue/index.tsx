import { FunctionComponent, memo, useEffect, useRef } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as VNIcon } from 'src/assets/icons/vietnam.svg';
import { ReactComponent as ENIcon } from 'src/assets/icons/uk.svg';
import { ChangeLangueWrapper } from './style';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { changeLanguage } from 'src/services/app';

interface IProps {
  className?: string;
}

const ChangeLangue: FunctionComponent<IProps> = memo(({ className }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  const onChange = (lang: 'vn' | 'en') => {
    i18n.changeLanguage(lang);
    dispatch(changeLanguage(lang));
    setIsShow(false);
  };
  return (
    <ChangeLangueWrapper className={className}>
      <button className="lang-btn" onClick={() => setIsShow(!isShow)}>
        {t('name') === 'vn' ? <VNIcon /> : <ENIcon />}
      </button>
      {isShow && (
        <div className="change-langues-option" ref={ref}>
          <button onClick={() => onChange('vn')} className="lang_option">
            🇻🇳 Tiếng Việt
          </button>
          <button onClick={() => onChange('en')} className="lang_option">
            🇬🇧 English
          </button>
        </div>
      )}
    </ChangeLangueWrapper>
  );
});

export default ChangeLangue;
