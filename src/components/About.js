import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class About extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
          <h1> About Syd-Ax </h1>

          <p className='container'>
          Syd-ax is here to assist wheelchair users to navigate Sydney trains. </p>

        <Footer />
      </div>
    )
  }
}

export default About;
