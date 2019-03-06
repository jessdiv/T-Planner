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

  render(){
    let trips = this.props.trips["journeys"];

    console.log('number of legs', trips[0]["legs"].length);

    // console.log('----- this: ', this.getTime)

    return(
      <div className='allTrips container'>
        <ul className='tripList'>
          {trips.map((name, index) => {
            return <div className='trip'>
            <li key={index * 25} className='tripList'>
              <p>
               {(name["legs"][0]["origin"]["departureTimePlanned"])}</p>
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
