import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

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
      <div className="signup">
        <Header/>
        <h3> Sign up </h3>
        <form onSubmit={ this._handleSubmit }>
          <label htmlFor='firstName'> First Name: </label>
          <input type='text' name='firstName' id='firstName' onChange={ this._firstNameChange }/>

          <label htmlFor='lastName'> Last Name: </label>
          <input type='text' name='lastName' id='lastName' onChange={ this._lastNameChange }/>

          <label htmlFor='userame'> Pick a username: </label>
          <input type='text' name='username' id='username' onChange={ this._usernameChange }/>

          <label htmlFor='email'> Email: </label>
          <input type='text' name='email' id='email' onChange={ this._emailChange }/>

          <label htmlFor='password'> Password: </label>
          <input type='text' name='password' id='password' onChange={ this._passwordChange }/>

          <button> Sign in </button>
        </form>
        <Footer />
      </div>
    );
  }
}
 export default SignUp;
