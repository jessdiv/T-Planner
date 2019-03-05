import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

// bootstrap elements
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
    }
    this._firstNameChange = this._firstNameChange.bind(this);
    this._lastNameChange = this._lastNameChange.bind(this);
    this._usernameChange = this._usernameChange.bind(this);
    this._emailChange = this._emailChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._passwordChange = this._passwordChange.bind(this);
  }

  _firstNameChange(e) {
    this.setState({
      firstName: e.target.value,
    })
  }

  _lastNameChange(e) {
    this.setState({
      lastName: e.target.value,
    })
  }


  _usernameChange(e) {
    this.setState({
      username: e.target.value,
    })
  }

  _emailChange(e) {
    this.setState({
      email: e.target.value,
    })
  }

  _passwordChange(e) {
    this.setState({
      password: e.target.value,
    })
  }

  _handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <div className="signup App container">
        <Header/>
        <h3> Sign up </h3>
        <Form onSubmit={ this._handleSubmit }>
          <Form.Group>
            <Form.Label htmlFor='firstName'> First Name: </Form.Label>
            <Form.Control type='text' name='firstName' id='firstName' onChange={ this._firstNameChange } className="searchInput"/>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='lastName'> Last Name: </Form.Label>
            <Form.Control type='text' name='lastName' id='lastName' onChange={ this._lastNameChange } className="searchInput"/>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='userame'> Pick a username: </Form.Label>
            <Form.Control type='text' name='username' id='username' onChange={ this._usernameChange } className="searchInput"/>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='email'> Email: </Form.Label>
            <Form.Control type='text' name='email' id='email' onChange={ this._emailChange } className="searchInput"/>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='password'> Password: </Form.Label>
            <Form.Control type='text' name='password' id='password' onChange={ this._passwordChange } className="searchInput"/>
          </Form.Group>

          <Button type='submit' htmlFor='submit' variant='danger'> Sign in </Button>
        </Form>
        <Footer />
      </div>
    );
  }
}
 export default SignUp;
