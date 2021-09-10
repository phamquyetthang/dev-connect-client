import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import CopyField from 'src/components/Base/CopyField';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import ROUTER_NAME from 'src/lib/constants/router';
import { CommonTranslateKeyType } from 'src/lib/translations/vn/common';
import { logout } from 'src/services/auth';
import ChangeLangue from '../ChangeLangue';
import ChangeTheme from '../ChangeTheme';
import { HeaderBarWrapper } from './style';

const HeaderBar = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShowAvtModal, setIsShowAvtModal] = useState<boolean>(false);
  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const commonWord = useCallback(
    (title: CommonTranslateKeyType) => t(`commonTranslate.${title}`),
    [t]
  );
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

  const onLogout = () => {
    dispatch(logout());
    history.push(ROUTER_NAME.auth.login);
  };

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
          <h4>{`${userInfo.first_name} ${userInfo.last_name}`}</h4>
          <i>status</i>
        </div>
        <CopyField value={userInfo.email} className="copy_email" />
        <div className="header_set">
          <button>{commonWord('editProfile')}</button>
          <button>{commonWord('editProfile')}</button>
          <button>{commonWord('preferences')}</button>
        </div>

        <button onClick={onLogout}>{commonWord('logout')}</button>
      </div>
    </HeaderBarWrapper>
  );
});

export default HeaderBar;
