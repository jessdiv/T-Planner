import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  render(){
    return(
      <div className='signup App container'>
        <Header/>
        <h3> Sign in </h3>

        <Form>
          <Form.Group>
            <Form.Label htmlFor='email'> Email: </Form.Label>
            <Form.Control type='email' name='email' id='email' placeholder="Enter email" className="searchInput"/>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='password'> Password: </Form.Label>
            <Form.Control type='text' name='password' id='password'placeholder='Enter password' className="searchInput"/>
          </Form.Group>
            <Button type='submit' htmlFor='submit' variant='danger'> Sign in </Button>
        </Form>

        <Footer/>
      </div>
    );
  }
}
 export default SignIn;
