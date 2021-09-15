import isEmpty from 'lodash/isEmpty';
import { ReactNode, useMemo } from 'react';
import { FunctionComponent } from 'react';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { GlobalContainerWrapper, MainLoading, SnackBar } from './styled';
import SnackBarItem from 'src/components/Base/SnackBarItem';
import Sidebar from '../Sidebar';
import HeaderBar from '../HeaderBar';
import { useLocation } from 'react-router';
import ROUTER_NAME from 'src/lib/constants/router';

interface IProps {
  children: ReactNode;
}
const GlobalContainer: FunctionComponent<IProps> = ({ children }) => {
  const { spinLoading, snackBar } = useAppSelector((state) => state.app);
  const location = useLocation();
  const withSidebar = useMemo(
    () => location.pathname !== ROUTER_NAME.welcome.path,
    [location]
  );
  return (
    <GlobalContainerWrapper>
      <HeaderBar />

      {withSidebar && <Sidebar />}

      <div className="container">{children}</div>

      {spinLoading && (
        <MainLoading>
          <div className="loader"></div>
        </MainLoading>
      )}
      {!isEmpty(snackBar) && (
        <SnackBar>
          {snackBar.map((item) => (
            <SnackBarItem
              id={item.id}
              message={item.message}
              type={item.type}
              key={item.id}
            />
          ))}
        </SnackBar>
      )}
    </GlobalContainerWrapper>
  );
};

export default GlobalContainer;
