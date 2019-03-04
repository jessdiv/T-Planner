import React, { Component } from 'react';
import './App.css';
import SearchResults from './SearchResults';

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
      time: "",
      date: "",
      submitted: false,
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOriginChange = this._handleOriginChange.bind(this);
    this._handleDestinationChange = this._handleDestinationChange.bind(this);
    this._handleWheelchairInput = this._handleWheelchairInput.bind(this);
  }

  _handleOriginChange(e) {
    this.setState({
      origin: e.target.value,
    });
    console.log(this.state.origin);
  }

  _handleDestinationChange(e) {
    this.setState({
      destination: e.target.value,
    });
    console.log(this.state.destination);
  }

  _handleWheelchairInput(e) {
    this.setState({
      wheelchairAccess: !this.state.wheelchairAccess,
    })
    console.log(this.state.wheelchairAccess);
  }

  // _handleDate(e) {
  //   this.setState({
  //     date: e.target.value,
  //   })
  //   console.log(e.target.value);
  // }
  //
  // _handleTime(e) {
  //   this.setState({
  //     time: e.target.value,
  //   })
  //   console.log(e.target.value);
  // }


  _handleSubmit(e){
    e.preventDefault();
    console.log('hello');
    this.setState({
      submitted: true,
    })
  }

  resultSubmitted() {
    this.setState({
      submitted: false,
    })
  }

  render() {
    return(
      <div className='searchBar'>
        <h3 className='searchHeading'> A Trip Planner for train travel </h3>
        <Form onSubmit={ this._handleSubmit }>

          <Form.Label htmlFor='origin'> From: </Form.Label>
          <Form.Control type='text' name='origin'  id='origin' onChange={ this._handleOriginChange } className='searchInput' required autoFocus/>

          <Form.Label htmlFor='destination'> To: </Form.Label>
          <Form.Control type='text' name='destination' id="destination" onChange={ this._handleDestinationChange } className='searchInput' required/>

          <Form.Label htmlFor='date'> Select a date: </Form.Label>
          <Form.Control type='date' name='date' id="date" onChange={ this._handleDate } className='searchInput' required/>

          <Form.Label htmlFor='time'> Pick a time: </Form.Label>
          <Form.Control type='time' name='time' id="time" onChange={ this._handleTime } className='searchInput' required/>

          <Form.Label htmlFor='wheelchairAccess'className='accessToggle'> Return Wheelchair accessible routes only </Form.Label>
          <Form.Control type='checkbox' name='wheelchairAccess' className='accessToggle' id='wheelchairAccess' onChange={ this._handleWheelchairInput }/>

          <Button type='submit' htmlFor='submit' variant='danger'> Plan Trip </Button>
        </Form>

        <SearchResults origin={ this.state.origin } destination={ this.state.destination} submitted={ this.state.submitted } resultSubmitted={this.resultSubmitted.bind(this)} />
      </div>
    );
  }
}

export default Search
