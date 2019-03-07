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
            <input type="checkbox" aria-label="check box"/>
              <span></span>
              <span></span>
              <span></span>
            <ul id="menu">
              <li><Link to='/'> Home </Link></li>
              <li><Link to='/about'> About </Link></li>
              <li><Link to='/checkmystation'> Check a station </Link></li>
            </ul>
          </div>
          </Navbar>

        <img src='./syd-ax-logo.png' alt='Syd Ax Logo' className='logo'/>
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
