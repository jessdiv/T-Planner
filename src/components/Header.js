import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render () {
    return (
      <div className="header">

        <Navbar bg="light" variant='light' fixed="top" className='navlinks'>
          <Navbar.Brand href="/">AxSyd</Navbar.Brand>
            <Nav.Link href='/'> Home </Nav.Link>
            <Nav.Link href='/SignIn'> Sign in </Nav.Link>
            <Nav.Link href='/SignUp'> Sign up </Nav.Link>
        </Navbar>

        <h2 className="heading"> AxSyd </h2>
      </div>
    );
  }
}

export default Header
