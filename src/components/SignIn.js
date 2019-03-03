import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class SignIn extends Component {
  render(){
    return(
      <div className='signup'>
        <Header/>
        <h3> Sign in </h3>
        <form>
          <label htmlFor='email'> Email: </label>
          <input type='text' name='email' id='email'/>

          <label htmlFor='password'> Password: </label>
          <input type='text' name='password' id='password'/>

          <button> Sign in </button>
        </form>
        <Footer/>
      </div>
    );
  }
}
 export default SignIn;
