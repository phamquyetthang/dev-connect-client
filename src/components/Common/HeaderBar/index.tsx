import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import CopyField from 'src/components/Base/CopyField';
import PopupExtend from 'src/components/Base/PopupExtend';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import ROUTER_NAME from 'src/lib/constants/router';
import { CommonTranslateKeyType } from 'src/lib/translations/vn/common';
import { setProjectId } from 'src/services/app';
import { logout } from 'src/services/auth';
import ChangeLangue from '../ChangeLangue';
import { HeaderBarWrapper } from './style';

const HeaderBar = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShowAvtModal, setIsShowAvtModal] = useState<boolean>(false);

  const [isShowChangeProject, setIsShowChangeProject] =
    useState<boolean>(false);
  const userInfo = useAppSelector((state) => state.user);
  const { projectName, projects } = useAppSelector((state) => state.app);
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

  const changeProject = (id: string) => {
    dispatch(setProjectId(id));
    setIsShowChangeProject(false);
  };

  const nextToPreference = () => {
    setIsShowAvtModal(false);
    history.push(ROUTER_NAME.preferences.path);
  };
  return (
    <HeaderBarWrapper>
      <div className="header__logo">
        {projectName && (
          <PopupExtend
            visible={isShowChangeProject}
            onToggle={() => setIsShowChangeProject(!isShowChangeProject)}
            displayElement={
              <button className="header_project_name">{projectName}</button>
            }
            popupElement={
              <div className="header__projects">
                {projects.map((item) => (
                  <button key={item.id} onClick={() => changeProject(item.id)}>
                    {item.name}
                  </button>
                ))}
              </div>
            }
          />
        )}
      </div>
      <div className="header_tool">
        <ChangeLangue />
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
          <button onClick={nextToPreference}>
            {commonWord('preferences')}
          </button>
          <button onClick={() => history.push(ROUTER_NAME.snippets.path)}>
            {commonWord('snippet')}
          </button>
          <button onClick={() => history.push(ROUTER_NAME.welcome.path)}>
            {commonWord('project')}
          </button>
        </div>
        <button onClick={onLogout}>{commonWord('logout')}</button>
      </div>
    </HeaderBarWrapper>
  );
});

export default HeaderBar;
