import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class SearchResults extends Component {
  constructor() {
    super();
    this.state ={
      trip: null,
    }
  }

  componentDidUpdate() {
    if (this.props.submitted === true) {
      this.props.resultSubmitted();
      axios.get(`http://localhost:4000/searchresults?origin=${this.props.origin}&destination=${this.props.destination}`)
      .then(res => {
        const trip = res.data;
        console.log(res.data["version"]);
        this.setState({ trip })
        console.log(this.state.trip)

      })
    }
  }

  render() {

    return(
      this.state.trip === null ? <div>empty div</div> :
      <div>
        <p> From: {this.props.origin }</p>
        <p> To: {this.props.destination }</p>
        <p> Time:{this.state.trip["journeys"][0]["legs"][0]["origin"]["departureTimePlanned"]} </p>
      </div>
    );
  }
}

export default SearchResults
