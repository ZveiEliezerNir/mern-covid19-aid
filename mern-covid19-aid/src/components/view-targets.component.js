import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Target = props => (
    <tr>
        <td>{props.target.address}</td>
        <td>{props.target.city}</td>
        <td>{props.target.date.substring(0,10)}</td>
        <td>{props.target.longitude}</td>
        <td>{props.target.latitude}</td>
        <td>
            <Link to={"/targets/update/" + props.target._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTarget(props.target._id) }}>delete</a>
        </td>
    </tr>
)

export default class ViewTargets extends Component {
    constructor(props) {
        super(props);

        this.deleteTarget = this.deleteTarget.bind(this)

        this.state = { targets: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/targets/')
            .then(response => {
                this.setState({ targets: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTarget(id) {
        if (!confirm("This action cannot be undone!")) return;
        axios.delete('http://localhost:8080/targets/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            targets: this.state.targets.filter(ml => ml._id !== id)
        })
    }

    targetsList() {
        return this.state.targets.map(currentTarget => {
            return <Target target={currentTarget} deleteTarget={this.deleteTarget} key={currentTarget._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Registered targets</h3>
                <p align="right">
                    <Link to={"/targets/create"}>
                        <button type="button" className="btn btn-primary">Add New Target</button>
                    </Link>
                </p>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Address</th>
                            <th>City</th>
                            <th>Date</th>
                            <th>Longitude Name</th>
                            <th>Latitude</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.targetsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}