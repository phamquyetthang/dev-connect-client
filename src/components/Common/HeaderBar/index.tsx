import { useCallback, useEffect, useRef, useState } from 'react';
import ChangeLangue from '../ChangeLangue';
import ChangeTheme from '../ChangeTheme';
import { HeaderBarWrapper } from './style';

const HeaderBar = () => {
  const [isShowAvtModal, setIsShowAvtModal] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutSide = useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isShowAvtModal) {
          setIsShowAvtModal(false);
        }
      }
    },
    [isShowAvtModal]
  );
  useEffect(() => {
    document.addEventListener('click', handleClickOutSide, true);
    return () => {
      document.removeEventListener('click', handleClickOutSide, true);
    };
  }, [handleClickOutSide]);
  
  return (
    <HeaderBarWrapper>
      <div></div>
      <div className="header_tool">
        <ChangeLangue />
        <ChangeTheme />
        <img
          src="https://i.pravatar.cc/50"
          alt="avt"
          onClick={() => setIsShowAvtModal(true)}
        />
      </div>
      <div
        className={`profile-modal${isShowAvtModal ? ' show' : ''}`}
        ref={ref}
      >
        <div className="header_status">
          <img src="https://i.pravatar.cc/50" alt="avt" />
          <h4>Họ và tên</h4>
          <i>status</i>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </HeaderBarWrapper>
  );
};

export default HeaderBar;
