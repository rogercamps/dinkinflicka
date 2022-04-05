import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/Navigation";
import PhotoComponentIndex from './components/Photo/PhotoComponentIndex'
import PhotoDetail from './components/Photo/PhotoDetail'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/photos/:photoId'>
            <PhotoDetail />
          </Route>
          <Route path='/'>
            <PhotoComponentIndex />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
