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
      axios.get(`http://localhost:4000/searchresults?origin=${this.props.origin}&destination=${this.props.destination}`)
      .then(res => {
        const trips = res.data;
        console.log(res.data["version"]);
        this.setState({ trips })
        console.log(this.state.trips)

      })
    }
  }

  render() {
    return(
      this.state.trips === null ? <div></div> :
      <div>
        <h2> {this.props.origin} to {this.props.destination}</h2>
        <DisplayTrip trip={ this.state.trips }/>
      </div>
    );
  }
}

export default SearchResults
