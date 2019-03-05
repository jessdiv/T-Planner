import React, { Component } from 'react';
import DisplayTripInfo from './DisplayTripInfo';

class DisplayTrip extends Component {
  constructor() {
    super();
    this.state = {
      tripInfo: null,
    }
  }

  render(){
    const trips = this.props.trips["journeys"];

    const getTime = function(timestamp) {
      const time = new Date(timestamp)
      let hour = time.getUTCHours();
      let minutes = time.getUTCMinutes();
      console.log(time);
      console.log(hour);
      console.log(minutes);

      if (hour < 10 ){
        hour = ('0' + hour);
        console.log('hour:' + hour);
        return hour;
      }

      if (minutes < 10) {
        minutes = ('0' + minutes);
        console.log('minutes:' + minutes);
        return minutes;
      }

      return hour + ':' + minutes;
    }

    return(
      <div className='allTrips container'>
        <ul className='tripList'>
          {trips.map(function(name, index) {
            return <div className='trip'>
            <li key={ index} className='tripList'>
              <p>
               {(getTime(name["legs"][0]["origin"]["departureTimePlanned"]))}</p>
              <p>{name["legs"][0]["transportation"]["number"]} </p>


              <button className='moreInfo'> Click for train info </button>
            
              <DisplayTripInfo />

            </li>
            </div>;
          })}
        </ul>
      </div>
    )
  }
}

export default DisplayTrip;
