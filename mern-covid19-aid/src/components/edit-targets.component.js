import axios from 'axios';
import React, { Component, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditTargets extends Component {

    constructor(props) {
        super(props);

        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            address: '',
            city: '',
            date: new Date(),
            longitude: 0.0,
            latitude: 0.0
        }


    }

    componentDidMount() {

        console.log(this.props.match.params.id);
    
        axios.get('http://localhost:8080/targets/' + this.props.match.params.id)
          .then(response => {
            this.setState({
              address: response.data.address,
              city: response.data.city,
              date: new Date(response.data.date)
            })
          })
          .catch(function (error) {
            console.log(error);
    
          })
      }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        })
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();
        // convert the address to query string
        var query = this.state.address.replace(/ /, '%20');

        /*
            This one took a lot of time to implement correctly.
            LocationIQ service must respond before the browser sends the target object to the server.
            After a lot of async/await crap, I finally realized (thanks to an answer on stack overflow)
            that the right way is to send the target object in the '.then' part of the LocationIQ request.
        */
        axios({
            "async": true,
            "crossDomain": true,
            "url": "https://us1.locationiq.com/v1/search.php?key=c0bd8cb607b17d&q=" + query + "&format=json",
            "method": "GET"
        })
            .then(respone => {
                this.setState({
                    longitude: respone.data[0].lon,
                    latitude: respone.data[0].lat
                })
                console.log("response from locationIQ");

                const target = {
                    address: this.state.address,
                    city: this.state.city,
                    date: this.state.date,
                    longitude: this.state.longitude,
                    latitude: this.state.latitude
                }

                console.log(target);
                axios.post('http://localhost:8080/targets/update/' + this.props.match.params.id, target)
                    .then(res => console.log(res.data));
                window.location = '/';
            });
    }

    render() {
        return (
            <div>
                <h3>Edit Target</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Create Target" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}

