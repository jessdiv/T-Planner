import React, { Component } from 'react'

class DisplayTripInfo extends Component {
  constructor() {
    super();
    this.state = {
      stopSequence: [],
    }
  }

  componentDidMount = () => {
    console.log('this trip length', this.props.thisTrip["legs"].length);
    console.log('this trip', this.props.thisTrip["legs"]);

    if (this.props.thisTrip["legs"].length < 2) {
      let stopSequence = [];

      console.log('this only has 1 leg!')
      console.log(this.props.thisTrip["legs"][0]["stopSequence"])
      this.props.thisTrip["legs"][0]["stopSequence"].map((name) =>{
        console.log('parent name', name['parent']['disassembledName']);
        stopSequence.push(name['parent']['disassembledName'])
        return stopSequence
      })

      console.log('stop sequence', stopSequence);

      this.setState({ stopSequence });

        // return this.setState({ stopSequence: name['name']});

    } else {
      console.log('this has more than one leg!');
    }

  }

  render() {
    // console.log(this.state.stopSequence);

    // const thisTrip = this.props.thisTrip["legs"][0]["stopSequence"];

    // console.log('this trip: ',thisTrip);

    return (
      this.props.display === false ? <div>not displaying</div> :
      <div>
        <ul>
        {}
        </ul>
      </div>
    );
  }
}

export default DisplayTripInfo
