import isEmpty from 'lodash/isEmpty';
import { ReactNode, useEffect, useMemo } from 'react';
import { FunctionComponent } from 'react';
import { io } from 'socket.io-client';
import { useAppSelector } from 'src/hooks/useAppSelector';
import {
  ErrorModalWrapper,
  GlobalContainerWrapper,
  MainLoading,
  SnackBar,
} from './styled';
import SnackBarItem from 'src/components/Base/SnackBarItem';
import Sidebar from '../Sidebar';
import HeaderBar from '../HeaderBar';
import { useHistory, useLocation } from 'react-router';
import ROUTER_NAME from 'src/lib/constants/router';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { getInfoService } from 'src/services/project';
import { clearAppErr } from 'src/services/app';
import { getUserInfoService } from 'src/services/user';
import Modal from 'src/components/Base/Modal';

interface IProps {
  children: ReactNode;
}
const GlobalContainer: FunctionComponent<IProps> = ({ children }) => {
  const { spinLoading, snackBar, projectId, error } = useAppSelector(
    (state) => state.app
  );
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const withSidebar = useMemo(
    () => location.pathname !== ROUTER_NAME.welcome.path,
    [location]
  );

  useEffect(() => {
    if (!projectId && withSidebar) {
      history.push(ROUTER_NAME.welcome.path);
    } else {
      dispatch(getInfoService({ id: projectId }));
    }
    dispatch(getUserInfoService());
  }, [dispatch, history, projectId, withSidebar]);

  const closeErrorModal = (back?: boolean) => {
    if (error.isBack && back) {
      history.goBack();
    }
    if (error.navigate && back) {
      history.push(error.navigate);
    }
    dispatch(clearAppErr());
  };

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

      <ErrorModalWrapper>
        <Modal
          isShow={error.error}
          title={error.title}
          closeBtn="OK"
          onClose={closeErrorModal}
          {...((error.isBack || error.isBack) && {
            submitBtn: 'BACK',
            onSubmit: () => closeErrorModal(true),
          })}
        >
          {error.content}
        </Modal>
      </ErrorModalWrapper>
    </GlobalContainerWrapper>
  );
};

export default GlobalContainer;
export const socket = io(process.env.REACT_APP_API_HOST || '');