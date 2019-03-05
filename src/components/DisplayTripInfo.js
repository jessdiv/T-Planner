import React, { Component } from 'react'

class DisplayTripInfo extends Component {
  render() {

    const thisTrip = this.props.thisTrip["legs"][0]["stopSequence"];

    return (
      <div>
        <p> Stop info coming soon </p>
        <p> {thisTrip.map((stop, index) => {
          return <li>stop["name"]</li>;
        })} </p>
      </div>
    );
  }
}

export default DisplayTripInfo
