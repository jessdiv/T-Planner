import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayTrip from './DisplayTrip';

class SearchResults extends Component {
  constructor() {
    super();
    this.state ={
      trips: null,
    }
  }

  componentDidUpdate() {
    if (this.props.submitted === true) {
      this.props.resultSubmitted();
      axios.get(`http://localhost:4000/searchresults?origin=${this.props.origin}&destination=${this.props.destination}&time=${this.props.time}`)
      .then(res => {
        const trips = res.data;
        this.setState({ trips })
      })
    }
  }

  render() {
    return(
      this.state.trips === null ? <div></div> :
      <div className='tripHeading'>
        <h2 className='route'> {this.props.origin} to {this.props.destination}</h2>
        <p className='routeTime'> Leaving after: {this.props.time }, {this.props.date }</p>
        <DisplayTrip trips={ this.state.trips }/>
      </div>
    );
  }
}

export default SearchResults
