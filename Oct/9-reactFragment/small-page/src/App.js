import React, { Component } from 'react';
import './App.css';
import TableHeader from './Components/TableHeader';
import TableBody from './Components/TableBody';

export default class App extends Component {

  state = {
    List: [
      { id: 1, name: "Ali", age: 29, email: "ali@dci.com" },
      { id: 2, name: "Peter", age: 25, email: "peter@dci.com" },
      { id: 3, name: "Farhan", age: 12, email: "farhan@dci.com" },
      { id: 4, name: "John", age: 13, email: "eggbert@dci.com" },
      { id: 5, name: "Rose", age: 13, email: "lalonde@dci.com" },
    ]
  }

  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <TableHeader list={this.state.List} />
            </tr>
          </thead>
          <tbody>
            <TableBody list={this.state.List} />
          </tbody>
        </table>
      </div>
    );
  }
}
