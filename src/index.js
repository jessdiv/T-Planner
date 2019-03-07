import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import CheckMyStation from './components/CheckMyStation'
import About from './components/About'
// import MyAccount from './components/MyAccount'
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import ConfirmTrip from './components/ConfirmTrip'
// import * as serviceWorker from './serviceWorker';

const Routes = (
  <Router>
    <div>
      <Route exact path='/' component={ App }/>
      <Route exact path='/checkmystation' component={ CheckMyStation }/>
      <Route exact path='/about' component={ About }/>
      {/*  <Route exact path='/myaccount' component={ MyAccount }/>*/}
      {/* <Route exact path='/signup' component={ SignUp }/>*/}
      {/* <Route exact path='/signin' component={ SignIn }/>
      <Route path='/confirmation' component={ ConfirmTrip }/> */}
    </div>
  </Router>
)

ReactDOM.render(Routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
