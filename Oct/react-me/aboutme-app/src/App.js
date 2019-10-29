import React, { Component } from 'react'
import './App.css'
import Me from './Components/Me'
import Hobbies from './Components/Hobbies'
import Contact from './Components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Banner">
            <h1>Website about me</h1>
          </div>
          <ul className="Navbar">
            <li>
              <Link to="/Me">
                Me
              </Link>
            </li>
            <li>
              <Link to="/Hobbies">
                Hobbies
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/Me">
            <Me />
          </Route>
          <Route path="/Hobbies">
            <Hobbies />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>

      </Router>
    )
  }
}
