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
import {
  getInfoService,
  getStatusListService,
  getTagsService,
} from 'src/services/project';
import { clearAppErr } from 'src/services/app';
import { getUserInfoService } from 'src/services/user';
import Modal from 'src/components/Base/Modal';
import clsx from 'clsx';

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

  const preScreens = useMemo(
    () => [ROUTER_NAME.preferences.path, ROUTER_NAME.snippets.path],
    []
  );

  const withSidebar = useMemo(
    () =>
      location.pathname !== ROUTER_NAME.welcome.path &&
      !preScreens.includes(location.pathname),
    [location.pathname, preScreens]
  );

  useEffect(() => {
    if (!projectId && withSidebar) {
      if (!preScreens.includes(location.pathname)) {
        history.push(ROUTER_NAME.welcome.path);
      }
    } else {
      dispatch(getInfoService({ id: projectId }));
    }
    dispatch(getUserInfoService());
  }, [
    dispatch,
    history,
    location.pathname,
    preScreens,
    projectId,
    withSidebar,
  ]);

  const closeErrorModal = (back?: boolean) => {
    if (error.isBack && back) {
      history.goBack();
    }
    if (error.navigate && back) {
      history.push(error.navigate);
    }
    dispatch(clearAppErr());
  };

  useEffect(() => {
    if (projectId) {
      dispatch(getStatusListService({ projectId }));
      dispatch(getTagsService({ projectId }));
    }
  }, [dispatch, projectId]);

  return (
    <GlobalContainerWrapper className={clsx({ 'flex-body': !withSidebar })}>
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
