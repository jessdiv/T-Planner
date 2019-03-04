import React, { Component } from 'react';

class DisplayTrip extends Component {
  render(){
    const trips = this.props.trips["journeys"];


    return(
      <div className='allTrips'>
        <ul className='tripList'>
          {trips.map(function(name, index) {
            return <li key={ index } className='trip'> {name["legs"][0]["origin"]["departureTimePlanned"]} - {name["legs"][0]["destination"]["arrivalTimePlanned"]} </li>;
          })}
        </ul>
      </div>
    )
  }
}

export default DisplayTrip;
