import React, { Component } from 'react';
import './App.css';
import SearchResult from './Components/SearchResult'
import Header from './Components/Header'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }

  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <input id="tableSearch"/>
       <button>Search</button>
        <table>
          <tbody>
            <SearchResult/>
          </tbody>
        </table>
      </div>
    );
  }

}

