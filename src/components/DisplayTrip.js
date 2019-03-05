import React, { Component } from 'react';

class DisplayTrip extends Component {
  constructor() {
    super();
    this.state = {
      tripInfo: null,
    }
  }

  _getTrainInfo = (e) => {
    e.preventDefault();
    console.log('hello');
  }

  render(){
    const trips = this.props.trips["journeys"];
    // const timePattern = /(\d{4}-\d{2}-\d{2})[A-Z]([0-9]{2}:[0-9]{2}:[0-9]{2})/

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
      <div className='allTrips'>
        <ul className='tripList'>
          {trips.map(function(name, index) {
            return <div className='trip'>
            <li key={ index}>
              <p>
               {(name["legs"][0]["origin"]["departureTimePlanned"])}</p>
              <p>{name["legs"][0]["transportation"]["number"]} </p>

              <button className='moreInfo'> Click for train info </button>
            </li>
            </div>;
          })}
        </ul>
      </div>
    )
  }
}

export default DisplayTrip;
