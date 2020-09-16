import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/managers/view/" className="nav-link">Managers</Link>
            </li>
            <li className="navbar-item">
              <Link to="/distributors/view/" className="nav-link">Distributors</Link>
            </li>
            <li className="navbar-item">
              <Link to="/targtes/create" className="nav-link">Targets</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}