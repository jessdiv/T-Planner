import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// const Welcome = ({user, onSignOut})=> {
//   // This is a dumb "stateless" component
//   return (
//     <div>
//       Welcome <strong>{user.username}</strong>!
//       <Link to="/" onClick={onSignOut}>Sign out</Link>
//     </div>
//   )
// }

class Header extends Component {

  render () {
    return (

      <div className="header">

        <Navbar bg="light" variant='light' fixed="top" className='navlinks'>
          <Navbar.Brand href="/"><strong>AXSYD</strong>  |</Navbar.Brand>
              <Link to='/'> Home  |</Link>
              <Link to='/checkmystation'> Check a station  |</Link>
            {/* <Link to='/logtrip'> Log a trip  |</Link>*/}

          {/*{ this.props.userPresent !== null ?
              <span>
                <Welcome />
                <Link to='/myaccount'> My Account </Link>
              </span> :
                <Link to='/signin'> Sign in  |</Link>}
            }*/}
        </Navbar>

        <h1 className="heading"> AxSyd </h1>
      </div>

    );
  }
}

export default Header
