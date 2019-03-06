import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import StationAccess from './StationAccessResult';

import Button from 'react-bootstrap/Button';
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

    axios.get(`http://localhost:4000/find_stop`)
    .then((response) => {
      allStations = response.data

      stationNames = Object.keys(allStations)

      this.setState({ allStations })
      this.setState({ stationNames })
    });

    axios.get('http://localhost:4000/wheelchairs.json').then(res => {
      this.setState({stationAccess: res.data});
    })

  }

  _handleStationSelection = (e) => {
    e.preventDefault();

    this.setState({ currentStationName: e.target.value})

    console.log(this.state.allStations[e.target.value]);

    this.setState({ currentStation: this.state.allStations[e.target.value] })

    console.log('station', this.state.currentStation);
      console.log('station', this.state.currentStationName);
    console.log('stationAccess:', this.state.stationAccess);


    this.setState({
      stationAccessibility: this.state.stationAccess[this.state.currentStationName]
    })

    console.log('accessibility: ',this.state.statistationAccessibility)

    if (this.state.stationAccessibility === true) {
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

          <Button type='submit' htmlFor='submit' variant='danger' size='lg'> Check Station </Button>
        </Form>

        <StationAccess message={this.state.message} stationName={ this.state.currentStationName}/>

        <Footer />
      </div>
    )
  }
}

export default CheckMyStation;
