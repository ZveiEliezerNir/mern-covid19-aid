import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class EditManagers extends Component {
  constructor(props) {
    super(props);

    console.log("Hello from Edit Manager Constructor!");

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: 0,
      city: '',
    }
  }

  componentDidMount() {

    console.log(this.props.match.params.id);

    axios.get('http://localhost:8080/managers/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          phone: response.data.phone,
          city: response.data.city,
        })
      })
      .catch(function (error) {
        console.log(error);

      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const manager = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      city: this.state.city
    }

    console.log(manager);

    axios.post('http://localhost:8080/managers/update/' + this.props.match.params.id, manager)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Manager</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
            />
          </div>

          <div className="form-group">
            <label>E-Mail</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={this.state.city}
              onChange={this.onChangeCity}
            />
          </div>


          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}