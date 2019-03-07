import React, { Component } from 'react';

class StationAccess extends Component {
  render(){
    return (
      this.props.stationAccess ?

      <div className='container greenMessage'>
        <h2> {this.props.stationName}{ this.props.message} </h2>
      </div>
      :
      <div className='container redMessage'>
        <h2> {this.props.stationName}{ this.props.message} </h2>
      </div>
    );
  }
}

export default StationAccess;
