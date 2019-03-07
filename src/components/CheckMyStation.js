import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import StationAccess from './StationAccessResult';

// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CheckMyStation extends Component {
  constructor() {
    super();
    this.state = {
      allStations: null,
      stationNames: [],
      stationAccess: null,
      currentStation: null,
      currentStationName: null,
      stationAccessibility: null,
      message: "",
    }
  }

  componentDidMount = () => {
    let allStations;
    let stationNames;

    axios.get(`https://trip-planner-server.herokuapp.com/find_stop`)
    .then((res) => {
      allStations = res.data

      stationNames = Object.keys(allStations)

      this.setState({ allStations })
      this.setState({ stationNames })
    });

    axios.get('https://trip-planner-server.herokuapp.com/wheelchairs')
    .then(res => {
      this.setState({ stationAccess: res.data});
    })
  }


  _handleStationSelection = (e) => {
    e.preventDefault();

    console.log('current station name: ', e.target.value);

    this.setState({ currentStationName: e.target.value})

    console.log('current station id',this.state.allStations[e.target.value]);

    this.setState({ currentStation: this.state.allStations[e.target.value] })

    console.log('/////////');
    console.log(e.target.value);
    console.log(this.state.stationAccess);
    console.log(this.state.stationAccess[e.target.value]);
    console.log('////////////');

    this.setState({
      stationAccessibility: this.state.stationAccess[e.target.value]
    })

    this.getMessage(e)

  }

  getMessage = (e) => {
    e.preventDefault()
    if (this.state.stationAccess[e.target.value] === true) {
      this.setState({
        message: ' is wheelchair accessible'
      })
      return;
    } else {
      this.setState({
        message: ' is not wheelchair accessible'
      })
      return;
    }
  }

  render() {

    return (
      <div>
        <Header />
        <h2> Check a station </h2>
        <Form onSubmit>
          <Form.Label htmlFor='destination'> Select Station </Form.Label>
          <Form.Control as='select' name='destination' id="destination" className='searchInput stationInput'  onChange={this._handleStationSelection} required> {this.state.stationNames.map((x, y) => <option key={y} value={x}>{x}</option>)}</Form.Control>
        </Form>

        <StationAccess message={this.state.message} stationName={ this.state.currentStationName}/>

        <Footer />
      </div>
    )
  }
}

export default CheckMyStation;
