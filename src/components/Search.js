import React, { Component } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import axios from 'axios';
// import Select from 'react-select';

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
      timeEntered: null,
      time: null,
      date: null,
      submitted: false,
      allStations: null,
      selectedOrigin: null,
      selectedDestination: null,
      selectedTime: null,
      selectedDate: null,
      stationNames: [],
      stationAccess: null,
    }
  }

  _handleOriginChange = (e) => {
    // console.log(e.target.value);
    this.setState({ selectedOrigin: e.target.value });

    // console.log(this.state.allStations[e.target.value]);

    this.setState({ origin: this.state.allStations[e.target.value]})

  }

  _handleDestinationChange = (e) => {
    // console.log(e.target.value);
    this.setState({ selectedDestination: e.target.value });

    // console.log(this.state.allStations[e.target.value]);

    this.setState({ destination: this.state.allStations[e.target.value]})
  }

  _handleWheelchairInput = (e) => {
    this.setState({
      wheelchairAccess: !this.state.wheelchairAccess,
    })
  }

  _handleDate = (e) => {
    // console.log(e.target.value)
    const dateString = (e.target.value).split("-").join("");

    this.setState({ date: dateString })
  }

  _handleTime = (e) => {

    this.setState({ timeEntered: e.target.value })

    let timeString = (e.target.value).split(":").join("")
    console.log(timeString);
    console.log(typeof timeString);

    let hours = timeString.toString().substr(0,2)
    console.log(typeof hours);
    let minutes = timeString.toString().slice(-2);
    console.log('minutes', minutes);

    let hoursNumber = Number(hours) - 1
    console.log(hoursNumber);

    if (hoursNumber >= 12) {
      hoursNumber = hoursNumber - 12;
    } else {
      hoursNumber = hoursNumber + 12;
    }

    console.log(hoursNumber)
    if (hoursNumber < 10) {
      hoursNumber = '0' + hoursNumber
    }

    console.log('newtime: ', `${hoursNumber}:${minutes}`);

    this.setState({
      time: `${hoursNumber}:${minutes}`,
    })
  }

  componentDidMount = () => {
    let allStations;
    let stationNames;

    axios.get(`https://trip-planner-server.herokuapp.com//find_stop`)
    .then((response) => {
      allStations = response.data

      stationNames = Object.keys(allStations)

      this.setState({ allStations })
      this.setState({ stationNames })
    });

      axios.get('https://trip-planner-server.herokuapp.com/wheelchairs.json').then(res => {
        this.setState({stationAccess: res.data});
      })
  }

  _handleSubmit = (e) => {
    e.preventDefault();

    // console.log('handle submit is origin being saved?', this.state.origin);

    if (this.state.origin === this.state.destination) {
      alert('Destination and origin cannot be the same');
    } else {
      this.setState({
        submitted: true,
      })
    }
  }

  resultSubmitted = () => {
    this.setState({
      submitted: false,
    })
  }

  render() {
    // const { selectedOrigin } = this.state;

    return(
      <div className='container'>
        <h3> A Trip Planner for train travel </h3>
        <Form onSubmit={ this._handleSubmit }>
          <Form.Group>
            <Form.Label htmlFor='origin'> From: </Form.Label>
          </Form.Group>
          <Form.Group>
              <Form.Control as="select" name='origin' id="origin" className='searchInput stationInput' onChange={this._handleOriginChange} required autoFocus>
              {this.state.stationNames.map((x, y) => <option key={y} value={x}>{x}</option>)}</Form.Control>
            </Form.Group>

          <Form.Label htmlFor='destination'> To: </Form.Label>
          <Form.Control as='select' name='destination' id="destination" className='searchInput stationInput'  onChange={this._handleDestinationChange} required> {this.state.stationNames.map((x, y) => <option key={y} value={x}>{x}</option>)}</Form.Control>

          <Form.Label htmlFor='date'> Select a date: </Form.Label>
          <Form.Control type='date' min='2019-03-07' max='2019-04-01' name='date' id="date" onChange={ this._handleDate } className="searchInput" required/>

          <Form.Label htmlFor='time'> Pick a time: </Form.Label>
          <Form.Control as='select' name='time' id="time" onChange={ this._handleTime } className='searchInput' required>
          <option>09:00</option><option>09:15</option><option>09:30</option><option>09:45</option><option>10:00</option><option>10:15</option><option>10:30</option><option>10:45</option><option>11:00</option><option>11:15</option><option>11:30</option><option>11:45</option><option>12:00</option><option>12:15</option><option>12:30</option><option>12:45</option><option>13:00</option><option>13:15</option><option>13:30</option><option>13:45</option><option>14:00</option><option>14:15</option><option>14:30</option><option>14:45</option><option>15:00</option><option>15:15</option><option>15:30</option><option>15:45</option><option>16:00</option><option>16:15</option><option>16:30</option><option>16:45</option><option>17:00</option><option>17:15</option><option>17:30</option><option>17:45</option><option>18:00</option><option>18:15</option><option>18:30</option><option>18:45</option><option>19:00</option><option>19:15</option><option>19:30</option><option>19:45</option><option>20:00</option><option>20:15</option><option>20:30</option><option>20:45</option><option>21:00</option><option>21:15</option><option>21:30</option><option>21:45</option><option>22:00</option><option>22:15</option><option>22:30</option><option>22:45</option><option>23:00</option><option>23:15</option><option>23:30</option><option>23:45</option><option>00:00</option><option>00:15</option><option>00:30</option><option>00:45</option><option>01:00</option><option>01:15</option><option>01:30</option><option>01:45</option><option>02:00</option><option>02:15</option><option>02:30</option><option>02:45</option><option>03:00</option><option>03:15</option><option>03:30</option><option>03:45</option><option>04:00</option><option>04:15</option><option>04:30</option><option>04:45</option><option>05:00</option><option>05:15</option><option>05:30</option><option>05:45</option><option>06:00</option><option>06:15</option><option>06:30</option><option>06:45</option><option>07:00</option><option>07:15</option><option>07:30</option><option>07:45</option><option>08:00</option><option>08:15</option><option>08:30</option><option>08:45</option>

          </Form.Control>

          <Form.Label htmlFor='wheelchairAccess' className='accessToggle hide'> Return Wheelchair accessible routes only </Form.Label>
          {/*}<Form.Control type='checkbox' name='wheelchairAccess' className='accessToggle hide' id='wheelchairAccess' onChange={ this._handleWheelchairInput }/>*/}
          <Button type='submit' htmlFor='submit' variant='danger' size='lg'> Plan Trip </Button>
        </Form>

        <SearchResults origin={ this.state.origin } destination={ this.state.destination} submitted={ this.state.submitted } resultSubmitted={this.resultSubmitted} timeEntered={this.state.timeEntered} time={this.state.time} date={this.state.date} originName={this.state.selectedOrigin} destinationName={this.state.selectedDestination} wheelchairAccess={this.state.wheelchairAccess}/>

      </div>
    );
  }
}

export default Search


  // <Select htmlFor='origin' value={ selectedOrigin } options={this.stationData} onChange={this._handleOriginChange}/>
