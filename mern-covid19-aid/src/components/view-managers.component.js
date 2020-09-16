import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Manager = props => (
  <tr>
    <td>{props.manager.username}</td>
    <td>{props.manager.password}</td>
    <td>{props.manager.firstname}</td>
    <td>{props.manager.lastname}</td>
    <td>{props.manager.email}</td>
    <td>{props.manager.phone}</td>
    <td>{props.manager.city}</td>
    <td>
      <Link to={"/managers/update/" + props.manager._id}>edit</Link> | <a href="#" onClick={() => { props.deleteManager(props.manager._id) }}>delete</a>
    </td>
  </tr>
)

export default class ViewManagers extends Component {
  constructor(props) {
    super(props);

    this.deleteManager = this.deleteManager.bind(this)

    this.state = { managers: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/managers/')
      .then(response => {
        this.setState({ managers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteManager(id) {
    axios.delete('http://localhost:8080/managers/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      managers: this.state.managers.filter(ml => ml._id !== id)
    })
  }

  managersList() {
    return this.state.managers.map(currentManager => {
      return <Manager manager={currentManager} deleteManager={this.deleteManager} key={currentManager._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Registered Managers</h3>
        <p align="right">
          <Link to={"/managers/create/"}>
            <button type="button" className="btn btn-primary">Add New Manager</button>
          </Link>
        </p>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-Mail</th>
              <th>Phone</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.managersList()}
          </tbody>
        </table>
      </div>
    )
  }
}