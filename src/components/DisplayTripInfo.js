import React, { Component } from 'react'

class DisplayTripInfo extends Component {
  render() {

    const thisTrip = this.props.thisTrip["legs"][0]["stopSequence"];
    console.log('this trip: ',thisTrip);

    return (
      <div>
        <p> Stop info coming soon </p>
        <p> {} </p>
      </div>
    );
  }
}

export default DisplayTripInfo
