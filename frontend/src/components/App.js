import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './navbar/NavbarContainer';
import Footer from './footer/Footer';
import MainPage from './main/MainPage';
import { Route } from "react-router-dom";
import VideoCall from './video_calls/video_call';
import LoginPage from './session_form/LoginPage';
import SignupPage from './session_form/SignupPage';
import UserPageContainer from './user/UserPageContainer';

const App = () => (
  <div className="main-content">
    {/* <ProtectedRoute path="/" component={NavBarContainer} /> */}
    <Switch>
        <Route exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginPage} />
        <AuthRoute exact path="/signup" component={SignupPage} />
        <Route exact path='/user/:userId' component={UserPageContainer} />
    </Switch>
    <Footer />
    <Route exact path="/video" component={VideoCall} />

  </div>
);

export default App;
