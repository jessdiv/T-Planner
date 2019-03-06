import React, { Component } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import axios from 'axios';
import Select from 'react-select';

// bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// date/time pickers
// import TimePicker from 'basic-react-timepicker';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      origin: null,
      destination: null,
      wheelchairAccess: false,
      time: null,
      date: null,
      submitted: false,
      allStations: null,
      selectedOrigin: null,
      selectedDestination: null,
      stationNames: [],
      // stationData: [],
    }
  }

  _handleOriginChange = (e) => {
    console.log(e.target.value);
    this.setState({ selectedOrigin: e.target.value });

    // console.log('station list:', this.state.stationNames);
    // console.log('///////////');
    // console.log(this.state.stationNames);
    // console.log(this.state.selectedOrigin);
    //
    // console.log('////////////');
    // const index = (this.state.stationNames).indexOf(this.state.selectedOrigin)
    // console.log('index is:', index);

    console.log(this.state.allStations[e.target.value]);

    this.setState({ origin: this.state.allStations[e.target.value]})

  }

  _handleDestinationChange = (e) => {
    console.log(e.target.value);
    this.setState({ selectedDestination: e.target.value });

    console.log(this.state.allStations[e.target.value]);

    this.setState({ destination: this.state.allStations[e.target.value]})
  }

  _handleWheelchairInput = (e) => {
    this.setState({
      wheelchairAccess: !this.state.wheelchairAccess,
    })
  }

  _handleDate = (e) => {
    this.setState({
      date: e.target.value,
    })
  }

  _handleTime = (e) => {
    this.setState({
      time: e.target.value,
    })
  }

  componentDidMount = () => {
    let allStations;
    let stationNames;

    axios.get(`http://localhost:4000/find_stop`)
    .then((response) => {
      allStations = response.data
      console.log('Response data: ', allStations);

      stationNames = Object.keys(allStations)
      console.log(stationNames);

      // const stationData = stationNames.map(opt => ({ "station": opt, "id": opt }));
      // console.log('station data', stationData);
      this.setState({ allStations })
      this.setState({ stationNames })
    });

  }


  _handleSubmit = (e, origin=this.state.origin, destination=this.state.destination) => {
    e.preventDefault();

    console.log('origin',this.state.origin);
    console.log('destination',this.state.destination);

    // axios.get(`http://localhost:4000/find_stop`)
    // .then((response) => {
    //   console.log(response.data);
    //   //
    //   // this.setState({ originStopId })
    //   //
    //   // axios.get(`http://localhost:4000/find_stop?stop=${this.state.destination}`)
    //   // .then((response) => {
    //   // let destinationStopId;
    //   //
    //   // this.setState({ destinationStopId })
    //
    // });

    this.setState({
      submitted: true,
    })
  }

  resultSubmitted = () => {
    this.setState({
      submitted: false,
    })
  }

  render() {
    // const { selectedOrigin } = this.state;

    return(
      <div className='searchBar container'>
        <h3 className='searchHeading'> A Trip Planner for train travel </h3>
        <Form onSubmit={ this._handleSubmit }>

        <label htmlFor='origin'> From: </label>
        <select name='origin' id="origin" className='searchInput' onChange={this._handleOriginChange}> {this.state.stationNames.map((x, y) => <option key={y}>{x}</option>)}</select>

        <label htmlFor='destination'> To: </label>
        <select name='destination' id="destination" className='searchInput' onChange={this._handleDestinationChange}> {this.state.stationNames.map((x, y) => <option key={y} value={x}>{x}</option>)}</select>

          <div> ----------------- </div>

          <Form.Label htmlFor='date'> Select a date: </Form.Label>
          <Form.Control type='date' name='date' id="date" onChange={ this._handleDate } className='searchInput'/>

          <Form.Label htmlFor='time'> Pick a time: </Form.Label>
          <Form.Control type='time' name='time' id="time" onChange={ this._handleTime } className='searchInput'/>

          <Form.Label htmlFor='wheelchairAccess' className='accessToggle'> Return Wheelchair accessible routes only </Form.Label>
          <Form.Control type='checkbox' name='wheelchairAccess' className='accessToggle' id='wheelchairAccess' onChange={ this._handleWheelchairInput }/>

          <Button type='submit' htmlFor='submit' variant='danger' size='lg'> Plan Trip </Button>
        </Form>

        <SearchResults origin={ this.state.origin } destination={ this.state.destination} submitted={ this.state.submitted } resultSubmitted={this.resultSubmitted} time={this.state.time} date={this.state.date}/>

      </div>
    );
  }
}

export default Search


  // <Select htmlFor='origin' value={ selectedOrigin } options={this.stationData} onChange={this._handleOriginChange}/>
