import { Redirect, Route, Switch } from 'react-router-dom';
import AuthScreen from './Auth';

const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth" component={AuthScreen} />
      <Redirect exact from="/" to="/auth" />
    </Switch>
  );
};

export default RootRouter;
