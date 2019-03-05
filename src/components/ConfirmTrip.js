import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class ConfirmTrip extends Component {
  render() {
    return (
    <div className='confirmation'>
      <Header />
      <h2> Confirmation Page </h2>
      <Footer />
    </div>
    )
  }
}

export default ConfirmTrip;
