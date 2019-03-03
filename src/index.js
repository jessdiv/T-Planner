import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import * as serviceWorker from './serviceWorker';

const Routes = (
  <Router>
    <div>
      <Route exact path='/' component={ App }/>
      <Route exact path='/Signup' component={ SignUp }/>
      <Route exact path='/Signin' component={ SignIn }/>
    </div>
  </Router>
)

ReactDOM.render(Routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
