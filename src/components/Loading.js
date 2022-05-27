import React, { Component } from 'react';
import loading from './Loading.gif';

export default class Loading extends Component {
  render() {
    return (
      <div> 
        <img src={loading} alt="" className="mx-auto d-block"/>
      </div>
    );
  }
}


