import { Redirect, Route, Switch } from 'react-router-dom';
import GlobalContainer from 'src/components/Common/GlobalContainer';
import { useAppSelector } from 'src/hooks/useAppSelector';
import ROUTER_NAME from 'src/lib/constants/router';
import AuthScreen from './Auth';
import Dashboard from './Dashboard';
import DocsScreen from './Docs';
import TodoScreen from './Todo';
import Welcome from './Welcome';

const RootRouter = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <Switch>
      {isAuth ? (
        <GlobalContainer>
          <Route exact path={ROUTER_NAME.welcome.path} component={Welcome} />
          <Route
            exact
            path={ROUTER_NAME.dashboard.path}
            component={Dashboard}
          />
          <Route exact path={ROUTER_NAME.unit.path} component={DocsScreen} />
          <Route exact path={ROUTER_NAME.todo.path} component={TodoScreen} />
        </GlobalContainer>
      ) : (
        <Route>
          <Route exact path={ROUTER_NAME.auth.path} component={AuthScreen} />
          <Redirect from="/" to={ROUTER_NAME.auth.login} />
        </Route>
      )}
    </Switch>
  );
};

export default RootRouter;
