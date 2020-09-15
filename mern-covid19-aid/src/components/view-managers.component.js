import React, { Component } from 'react';

export default class ViewManagers extends Component {
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
        this.onClickDeleteManager = this.onClickDeleteManager(this);
        this.onClickUpdateManager = this.onClickUpdateManager(this);

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
            users: ['user 1', 'user 2', 'user 3'],
            username: 'user 1'
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

    onClickDeleteManager(e) {
        this.setState({
            city: ""
        })
    }

    onClickUpdateManager(e) {
        this.setState({
            city: ""
        })
    }

    render() {
        return (
            <div>
                <h3>Select a manager by username to view, edit or delete its data</h3>

                <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function (user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        disabled='true'
                    />
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.firstname}
                        onChange={this.onChangeFirstname}
                        disabled='true'
                    />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.lastname}
                        onChange={this.onChangeLastname}
                        disabled='true'
                    />
                </div>

                <div className="form-group">
                    <label>E-Mail</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        disabled='true'
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        disabled='true'
                    />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.city}
                        onChange={this.onChangeCity}
                        disabled='true'
                    />
                </div>


                <div className="form-group">
                    <button className="btn btn-danger" onClick={this.onClickDeleteManager} disabled='true'>  Delete Manager</button>
                    <button className="btn btn-primary" onClick={this.onClickUpdateManager} disabled='true'>  Update Manager</button>
                </div>

            </div>
        )
    }
}