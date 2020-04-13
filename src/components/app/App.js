import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VolunteerRegister from '../VolunteerRegister/VolunteerRegister';
import NavBar from '../NavBar/NavBar';
import React from 'react';
import './App.scss';


function App() {
  return (
    <div className="appContainer">
      <Router>
        <NavBar />
        <main className="main">
          <Switch>
            <Route path="/volunteer/register">
              <VolunteerRegister />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>

  );
}

export default App;
