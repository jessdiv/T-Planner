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
          Syd-ax is here to assist wheelchair users to navigate Sydney trains. With a staggering 44% of train stations in NSW not being accesssible to wheelchair users, it can be a daunting experience traveling solo. This service aims to give users more confidence and independance when traveling and raise awareness of the issues surrounding inaccessible public transport in Sydney. </p>

        <Footer />
      </div>
    )
  }
}

export default About;
