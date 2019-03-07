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

  handleClick = (e) => {
    e.preventDefault()
    // console.log('------ clickity click');

    this.setState({
      displayStops: !this.state.displayStops,

    })
    // console.log('displayStops:' + this.state.displayStops);
  }


  render(){
    let trips = this.props.trips["journeys"];

    return(
      <div className='allTrips container'>
        <ul className='tripList'>
        {trips.map((name, index) => {
          return <div className='trip'>
          <li key={index * 25} className='tripList'>
            <p> Departing:
              {(name["legs"][0]["origin"]["departureTimePlanned"]).split("T")[1].substr(0, 5)}</p>

            <p>{name["legs"][0]["transportation"]["number"]} </p>

            <button className='moreInfo' onClick={this.handleClick}> Click for train info </button>

          {<DisplayTripInfo display={this.state.displayStops} thisTrip={trips[index]}/>}

          </li>
          </div>;
        })}
        </ul>
      </div>
    )
  }
}

export default DisplayTrip;



//
//     { this.state.displayStops && <DisplayTripInfo thisTrip={trips[index]}/>}
//
