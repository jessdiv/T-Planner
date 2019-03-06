import React, { Component } from 'react';

class StationAccess extends Component {
  render(){
    return (
      <div>
        <h2> {this.props.stationName}{ this.props.message} </h2>
      </div>
    );
  }
}

export default StationAccess;
