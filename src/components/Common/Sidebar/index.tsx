import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import ROUTER_NAME from 'src/lib/constants/router';
import { ReactComponent as HomeIcon } from 'src/assets/icons/home.svg';
import { ReactComponent as ConnectIcon } from 'src/assets/icons/connect.svg';
import { ReactComponent as ListIcon } from 'src/assets/icons/list.svg';
import { ReactComponent as ChatIcon } from 'src/assets/icons/chat.svg';
import { ReactComponent as TodoIcon } from 'src/assets/icons/check-box.svg';
import { ReactComponent as DocIcon } from 'src/assets/icons/file.svg';

import { CommonTranslateKeyType } from 'src/lib/translations/vn/common';

import { SidebarWrapper } from './style';
const Sidebar = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const commonWord = useCallback(
    (title: CommonTranslateKeyType) => t(`commonTranslate.${title}`),
    [t]
  );
  return (
    <SidebarWrapper>
      <Link to={ROUTER_NAME.dashboard.path} className="sidebar-menu">
        <HomeIcon />
        {/* <span>{commonWord('dashboard')}</span> */}
      </Link>
      <Link to={ROUTER_NAME.unit.path} className="sidebar-menu">
        <ConnectIcon />
      </Link>
      <Link to={ROUTER_NAME.dashboard.path} className="sidebar-menu">
        <ListIcon />
      </Link>
      <Link to={ROUTER_NAME.dashboard.path} className="sidebar-menu">
        <ChatIcon />
      </Link>
      <Link to={ROUTER_NAME.todo.path} className="sidebar-menu">
        <TodoIcon />
      </Link>
      <Link to={ROUTER_NAME.dashboard.path} className="sidebar-menu">
        <DocIcon />
      </Link>
    </SidebarWrapper>
  );
};

export default Sidebar;
