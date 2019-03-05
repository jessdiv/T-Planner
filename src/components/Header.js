import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render () {
    return (
      <div className="header">

        <Navbar bg="light" variant='light' fixed="top" className='navlinks'>
          <Navbar.Brand href="/">AXSYD</Navbar.Brand>
            <Link to='/'> Home </Link>
            <Link to='/Signin'> Sign in </Link>
            <Link to='/Signup'> Sign up </Link>
        </Navbar>

        <h1 className="heading"> AxSyd </h1>
      </div>
    );
  }
}

export default Header
