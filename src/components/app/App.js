import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VolunteerRegister from '../volunteerRegister/volunteerRegister';
import {Container} from 'reactstrap'

import NavBar from '../navbar/navBar';

function App() {
  return (
    <div className="appContainer">
      <Router>
        <NavBar />
        <div className="main">
            <Switch>
              <Route path="/volunteerRegister">
                <VolunteerRegister />
              </Route>
            </Switch>
            </div>
      </Router>
    </div>
      
  );
}

export default App;
