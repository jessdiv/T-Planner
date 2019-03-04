import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component {
  render () {
    return (
      <div className="header">
        <h2> Travel app header ( name TBA )! </h2>
        <nav className='navlinks'>
          <Link to='/'> Home  |</Link>
          <Link to='/SignIn'> Sign in  |</Link>
          <Link to='/SignUp'> Sign up </Link>
        </nav>
      </div>
    );
  }
}

export default Header
