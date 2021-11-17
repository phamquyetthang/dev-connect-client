import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import CopyField from 'src/components/Base/CopyField';

import Modal from 'src/components/Base/Modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

import PopupExtend from 'src/components/Base/PopupExtend';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAppSelector } from 'src/hooks/useAppSelector';
import ROUTER_NAME from 'src/lib/constants/router';
import { CommonTranslateKeyType } from 'src/lib/translations/vn/common';
import { setProjectId } from 'src/services/app';
import { logout } from 'src/services/auth';
import ChangeLangue from '../ChangeLangue';
import ChangeTheme from '../ChangeTheme';
import { HeaderBarWrapper } from './style';

const HeaderBar = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShowAvtModal, setIsShowAvtModal] = useState<boolean>(false);
  const [isShowChangeProject, setIsShowChangeProject] =
    useState<boolean>(false);
  const [isShowSetting, setIsShowSetting] = useState(false);
  const preferences = useAppSelector((state) => state.user.preferences);
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
    alert('1');
    dispatch(logout());
    history.push(ROUTER_NAME.auth.login);
  };

  const changeProject = (id: string) => {
    dispatch(setProjectId(id));
    setIsShowChangeProject(false);
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
          <button>{commonWord('editStatus')}</button>
          <button>{commonWord('editProfile')}</button>
          <button onClick={() => setIsShowSetting(true)}>
            {commonWord('preferences')}
          </button>
        </div>

        <button onClick={onLogout}>{commonWord('logout')}</button>
      </div>
      <Modal
        isShow={isShowSetting}
        title="Preferences"
        closeBtn="Close"
        onClose={() => setIsShowSetting(false)}
      >
        <div className="setting-modal">
          {JSON.stringify(preferences)}
          <CopyField
            value={preferences?.snippets[0].template || ''}
            className="user_snippet_template"
          />
          <SyntaxHighlighter language="javascript" style={dark}>
            {preferences?.snippets[0].template || ''}
          </SyntaxHighlighter>
        </div>
      </Modal>
    </HeaderBarWrapper>
  );
});

export default HeaderBar;
