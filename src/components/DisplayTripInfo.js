import React, { Component } from 'react'

class DisplayTripInfo extends Component {
  constructor() {
    super();
    this.state = {
      stopSequence: [],
      arrivalTime: null,
      isLoading: true,
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

      // this.setState({})

    } else {
      // let stopSequence = [];
      console.log('THIS HAS MORE THAN ONE LEG');

      /// TBA ///
    }

    this.setState({ isLoading: false })

  }

  render() {

    return (
      this.state.isLoading ? <div> Finding routes now... </div> :

      this.props.display === false ? <div></div> :
      <div className='stops'>
        {this.state.stopSequence.map((item, index) => {
          return <p> {item} </p>
        })}
      </div>
    );
  }
}

export default DisplayTripInfo
