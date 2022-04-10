import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import PhotoComponentIndex from './components/Photo/PhotoComponentIndex'
import PhotoDetail from './components/Photo/PhotoDetail'
import SplashComponent from './components/SplashComponent/SplashComponent'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
        <Route exact path="/">
        {sessionUser ? <Redirect to="/home" /> : <SplashComponent />}
        </Route>
          <Route path="/signup">
          {sessionUser ? <Redirect to="/" /> : <SignupFormPage />}
          </Route>
          <Route path='/photos/:photoId'>
            {sessionUser ? <PhotoDetail /> : <Redirect to="/" />}
          </Route>
          <Route path='/home'>
            {sessionUser ?  <PhotoComponentIndex /> : <Redirect to="/" /> }
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
