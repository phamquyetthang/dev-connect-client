import isEmpty from 'lodash/isEmpty';
import { ReactNode } from 'react';
import { FunctionComponent } from 'react';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { GlobalContainerWrapper, MainLoading, SnackBar } from './styled';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addSnackBar, onDarkMode } from 'src/services/app';
import SnackBarItem from 'src/components/Base/SnackBarItem';

interface IProps {
  children: ReactNode;
}
const GlobalContainer: FunctionComponent<IProps> = ({ children }) => {
  const { spinLoading, snackBar } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <GlobalContainerWrapper>
      {children}
      <button
        onClick={() =>
          dispatch(addSnackBar({ type: 'error', message: 'test 123' }))
        }
      >
        test me
      </button>
      <button onClick={() => dispatch(onDarkMode(true))}>test me 2</button>
      <button onClick={() => dispatch(onDarkMode(false))}>test me 3</button>
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
