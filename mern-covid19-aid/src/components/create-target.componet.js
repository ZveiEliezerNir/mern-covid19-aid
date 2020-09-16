import axios from 'axios';
import React, { Component, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



export default class CreateTarget extends Component {

    constructor(props) {
        super(props);

        this.geoDemo = this.geoDemo.bind(this);

    }



    render() {

        const MapViewport = () => {
            const [viewport, setViewport] = useState({
                latitude: 45,
                longitude: -70,
                width: "100vw",
                height: "100vh",
                zoom: 10
            });
        }

        return (
            <div>
                <style>
                    
                </style>
                <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
                <ReactMapGL

                    {...MapViewport.viewport}
                    mapboxApiAccessToken="pk.eyJ1IjoienZlaWVsaWV6ZXIiLCJhIjoiY2tmNWY1dG9yMDRidzJxb3p0bmkxa2hqbiJ9.S3XvBUyAYt47tDlYLymaEw"
                >
                    markers here
</ReactMapGL>
            </div>

        )
    }

    geoDemo() {

        console.log("in geo demo!!");

        axios({
            "async": true,
            "crossDomain": true,
            "url": "https://us1.locationiq.com/v1/search.php?key=c0bd8cb607b17d&q=Empire%20State%20Building&format=json",
            "method": "GET"
        })
            .then(respone => {
                console.log(respone);
            });

    }

}

