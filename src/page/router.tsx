import { Redirect, Route, Switch } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useAppSelector';
import ROUTER_NAME from 'src/lib/constants/router';
import AuthScreen from './Auth';
import Welcome from './Welcome';

const RootRouter = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <Switch>
      {isAuth ? (
        <Route>
          <Route exact path={ROUTER_NAME.welcome.path} component={Welcome} />
          <Redirect exact from="/" to={ROUTER_NAME.welcome.path} />
        </Route>
      ) : (
        <Route>
          <Route exact path={ROUTER_NAME.auth.path} component={AuthScreen} />
          <Redirect exact from="/" to={ROUTER_NAME.auth.login} />
        </Route>
      )}
    </Switch>
  );
};

export default RootRouter;
