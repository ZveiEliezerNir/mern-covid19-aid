import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Distributor = props => (
  <tr>
    <td>{props.distributor.username}</td>
    <td>{props.distributor.password}</td>
    <td>{props.distributor.firstname}</td>
    <td>{props.distributor.lastname}</td>
    <td>{props.distributor.email}</td>
    <td>{props.distributor.phone}</td>
    <td>{props.distributor.city}</td>
    <td>
      <Link to={"/distributors/update/" + props.distributor._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDistributor(props.distributor._id) }}>delete</a>
    </td>
  </tr>
)

export default class ViewDistributors extends Component {
  constructor(props) {
    super(props);

    this.deleteDistributor = this.deleteDistributor.bind(this)

    this.state = { distributors: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/distributors/')
      .then(response => {
        this.setState({ distributors: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDistributor(id) {
    axios.delete('http://localhost:8080/distributors/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      distributors: this.state.distributors.filter(ml => ml._id !== id)
    })
  }

  distributorsList() {
    return this.state.distributors.map(currentDistributor => {
      return <Distributor distributor={currentDistributor} deleteDistributor={this.deleteDistributor} key={currentDistributor._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Registered Distributor</h3>
        <p align="right">
          <Link to={"/distributors/create/"}>
            <button type="button" className="btn btn-primary">Add New Distributor</button>
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
            {this.distributorsList()}
          </tbody>
        </table>
      </div>
    )
  }
}