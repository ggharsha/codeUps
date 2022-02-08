import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/NavbarContainer';

import MainPage from './main/MainPage';
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupPage from './session_form/SignupPage';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupPage} />
    </Switch>

  </div>
);

export default App;
