import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logout from './services/Logout'
import Basic from './pages/Basic'
import GoogleSignup from './pages/GoogleSignup'
import Home from './pages/Home'
import axios from 'axios'
import EditOrder from './components/EditOrder';
export class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
    <Switch>
    <Route  path='/edit/:id'>
            <EditOrder/>
          </Route>
    <Route  path='/logout'>
            <Logout/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <GoogleSignup />
          </Route>
          <Route path="/">
            <Basic />
          </Route>
        
        </Switch>
        </Router>
</div>
    )
  }
}

export default App
