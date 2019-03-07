import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userPresent: null,
    }
  }

  render() {
    return (
      <div className="App">
          <Header userPresent={this.state.userPresent}/>
          <Search />
          <Footer />
      </div>
    );
  }
}

export default App;
