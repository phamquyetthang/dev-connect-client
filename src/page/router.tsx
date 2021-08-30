import { Redirect, Route, Switch } from 'react-router-dom';
import GlobalContainer from 'src/components/Common/GlobalContainer';
import ROUTER_NAME from 'src/lib/constants/router';
import AuthScreen from './Auth';

const RootRouter = () => {
  return (
    <GlobalContainer>
      <Switch>
        <Route exact path={ROUTER_NAME.auth.path} component={AuthScreen} />
        <Redirect exact from="/" to={ROUTER_NAME.auth.login} />
      </Switch>
    </GlobalContainer>
  );
};

export default RootRouter;
