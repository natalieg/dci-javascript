import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(info) {
  return (
    <div className="App">
      <h1>Hello Again</h1>
      <p>{info.name}</p>
      <h2>{info.city}</h2>
    </div>
  );
}

function Person(val){
  return (
    <div className="Person">
      <p>Name: {val.name}</p>
      <p>Age : {getRandomInt(20,50)}</p>
      <p>Job: {val.job}</p>
      <p>Country: {val.country}</p>
    </div>
  );
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default App;
export {Person};
