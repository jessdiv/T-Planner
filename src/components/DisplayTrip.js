import React, { Component } from 'react';
import DisplayTripInfo from './DisplayTripInfo';

class DisplayTrip extends Component {
  constructor() {
    super();
    this.state = {
      tripInfo: null,
      displayStops: false,
    }
  }

  handleClick = () => {
    console.log('------ clickity click');

    this.setState({
      displayStops: !this.state.displayStops,

    })
    console.log('displayStops:' + this.state.displayStops);
  }

  getTime = (timestamp) => {
      const time = new Date(timestamp)
      let hour = time.getUTCHours();
      let minutes = time.getUTCMinutes();
      console.log(time);
      console.log(hour);
      console.log(minutes);

      if (hour < 10 ){
        hour = ('0' + hour);
        console.log('hour:' + hour);
        return (hour);
      }

      if (minutes < 10) {
        minutes = ('0' + minutes);
        console.log('minutes:' + minutes);
        return minutes;
      }

      return hour + ':' + minutes;
    }

  render(){
    let trips = this.props.trips["journeys"];
    console.log(trips[0]);

    // console.log('----- this: ', this.getTime)

    return(
      <div className='allTrips container'>
        <ul className='tripList'>
          {trips.map((name, index) => {
            return <div className='trip'>
            <li key={ index} className='tripList'>
              <p>
               {this.getTime(name["legs"][0]["origin"]["departureTimePlanned"])}</p>
              <p>{name["legs"][0]["transportation"]["number"]} </p>

              <button className='moreInfo' onClick={this.handleClick}> Click for train info </button>

              { this.state.displayStops && <DisplayTripInfo thisTrip={trips[index]}/>}

            </li>
            </div>;
          })}
        </ul>
      </div>
    )
  }
}

export default DisplayTrip;
