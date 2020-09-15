/*
* App.js
* mern-covid19-aid project
* Zvei Eliezer Nir & Refael Knoll
*
* main application logic, mainly Routes for CRUD operations to each model
*
*/

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import HomePage from "./components/home-page.component";

import CreateManagers from "./components/create-managers.component";
import ViewManagers from "./components/view-managers.component";
/*import UpdateManagers from "./components/update-managers.component";
import DeleteManagers from "./components/delete-managers.component";*/


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={HomePage} />

          <Route path="/managers/create/" component={CreateManagers} />
          <Route path="/managers/view" component={ViewManagers} />

          {/*
          <Route path="/managers/update/:id" component={UpdateManagers} />
          <Route path="/managers/delete/:id" component={DeleteManagers} />
          */}
        </div>
      </Router>
    );
  }
}

export default App;
