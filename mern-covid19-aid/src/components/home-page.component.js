import React, { Component } from 'react';
import covid19 from '../../img/covid19.png';

export default class HomePage extends Component {

  render() {
    return (
      <div>
        <img src={covid19} width="500" class="centerImg"></img>
      </div>

    );
  }
}