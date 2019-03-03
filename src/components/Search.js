import React, { Component } from 'react';
import './App.css';

// bootstrap components
import Button from 'react-bootstrap/Button';

// date/time pickers
// import TimePicker from 'basic-react-timepicker';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      origin: null,
      destination: null,
      wheelchairAccessOnly: false,
      time: null,
      date: null,
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
  }

  _handleDestinationChange(e) {
    this.setState({
      destination: e.target.value,
    });
  }

  _handleWheelchairInput(e) {
    this.setState({
      wheelchairAccessOnly: true,
    })
  }

  _handleTime(time) {
    this.setState({ time })
  }

  _handleSubmit(e){
    e.preventDefault();

  }

  render() {
    return(
      <div className='form'>
        <h3> Trip Planner </h3>
        <form onSubmit={ this._handleSubmit }>

          <label htmlFor='origin'> From: </label>
          <input type='text' name='origin'  id='origin' onChange={ this._handleOriginChange }/>

          <label htmlFor='destination'> To: </label>
          <input type='text' name='destination' onChange={ this._handleDestinationChange }/>

          <label htmlFor='wheelchairAccess'> Return Wheelchair accessible routes only </label>
          <input type='checkbox' name='wheelchairAccess' id='wheelchairAccess' onChange={ this._handleWheelchairInput }/>

          <label htmlFor='time'> Time: </label>


          <Button variant="primary"> Plan Trip </Button>
        </form>
      </div>
    );
  }
}

export default Search
