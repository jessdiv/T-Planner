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

        <Navbar bg="light" variant='light' fixed="top" className='navlinks' role="navigation">
          <div id="menuToggle">
            <input type="checkbox"/>
              <span></span>
              <span></span>
              <span></span>
            <ul id="menu">
              <Link to='/'> Home </Link>
              <Link to='/about'> About </Link>
              <Link to='/checkmystation'> Check a station </Link>
            </ul>
          </div>
          </Navbar>

        <h1 className="heading"> AxSyd </h1>
      </div>

    );
  }
}

export default Header

/* <Link to='/logtrip'> Log a trip  |</Link>*/

/*{ this.props.userPresent !== null ?
  <span>
    <Welcome />
    <Link to='/myaccount'> My Account </Link>
  </span> :
    <Link to='/signin'> Sign in  |</Link>}
}*/
