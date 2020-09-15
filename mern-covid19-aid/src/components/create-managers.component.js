import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateManagers extends Component {
  constructor(props) {
    super(props);
    

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
      users: []
    }
  }

  componentDidMount() {
    console.log("mount")
    this.setState({
        users:  ['test user'],
        username: 'test user'
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

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Manager</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="text"
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
          <input type="submit" value="Create Manager" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}