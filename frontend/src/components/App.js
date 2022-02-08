import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/NavbarContainer';

import MainPage from './main/MainPage';
// import LoginFormContainer from './session/';
import SignupFormContainer from './session_form/SignupFormContainer';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    <img src = '/images/procreator-ux-design-studio-VzJjPuk53sk-unsplash.jpg'/>

  </div>
);

export default App;
