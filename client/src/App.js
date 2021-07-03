import React from "react";
import Login from './components/login';

import NewTravel from './components/newTravel';
import ViewTravel from './components/viewTravel';
import DriverAndPassenger from './components/driverAndPassenger';
import ShowTable from './components/showTable';


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/newTravel">
          <NewTravel />
        </Route>
        <Route path="/viewTravel">
          <ViewTravel />
        </Route>
        <Route path="/driverAndPassenger">
          <DriverAndPassenger />
        </Route>
        <Route path="/showTable">
          <ShowTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;