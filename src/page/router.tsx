import { Redirect, Route, Switch } from 'react-router-dom';
import GlobalContainer from 'src/components/Common/GlobalContainer';
import AuthScreen from './Auth';

const RootRouter = () => {
  return (
    <GlobalContainer>
      <Switch>
        <Route exact path="/auth" component={AuthScreen} />
        <Redirect exact from="/" to="/auth" />
      </Switch>
    </GlobalContainer>
  );
};

export default RootRouter;
