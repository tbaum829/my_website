import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home';
import Chess from './chess';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/chess">
            <Chess />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
