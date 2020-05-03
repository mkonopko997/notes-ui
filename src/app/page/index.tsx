import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './login';
import Notes from './notes';
import PrivateRoute from '../component/auth/private-route';

const Page = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/notes">
            <Notes />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default Page;
