import React, { Component } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import axios from 'axios';

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
      originStopId: null,
      destinationStopId: null,
    }
  }

  _handleOriginChange = (e) => {
    this.setState({
      origin: e.target.value,
    });
  }

  _handleDestinationChange = (e) => {
    this.setState({
      destination: e.target.value,
    });
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

  _handleSubmit = (e, origin=this.state.origin, destination=this.state.destination) => {
    e.preventDefault();

    // axios.get(`http://localhost:4000/find_stop?stop=${this.state.origin}`)
    // .then((response) => {
    // let originStopId;
    //
    //   // console.log(response["request"]['response']);
    //   // console.log(`RESPONSE HERE: `, response["request"]['response']["itdRequest"]["itdStopFinderRequest"]["itdOdv"]["itdOdvPlace"]["itdOdvName"]["odvNameElem"]['id']);
    //
    //   this.setState({ originStopId })
    //
    //   axios.get(`http://localhost:4000/find_stop?stop=${this.state.destination}`)
    //   .then((response) => {
    //   let destinationStopId;
    //
    //   this.setState({ destinationStopId })
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
    return(
      <div className='searchBar container'>
        <h3 className='searchHeading'> A Trip Planner for train travel </h3>
        <Form onSubmit={ this._handleSubmit }>

          <Form.Label htmlFor='origin'> From: </Form.Label>
          <Form.Control type='text' name='origin'  id='origin' onChange={ this._handleOriginChange } className='searchInput' required autoFocus/>

          <Form.Label htmlFor='destination'> To: </Form.Label>
          <Form.Control type='text' name='destination' id="destination" onChange={ this._handleDestinationChange } className='searchInput' required/>

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
