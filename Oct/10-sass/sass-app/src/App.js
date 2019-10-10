import React from 'react';
//import './App.css';
import './app.scss';
import cupcake from './img/cupcake3.jpeg'
import cupcake3 from './img/cupcake2.jpeg'
import cupcake2 from './img/cupcake5.jpeg'
import cupcake4 from './img/cupcake4.jpeg'
import flower1 from './img/pinkflower4.jpeg'
import flower2 from './img/pinkflower5.jpeg'
import flower3 from './img/pinkflower6.jpeg'
import flower4 from './img/nature5.jpeg'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="headerText">
          <h1>girl website</h1>
          <p>a nice website for nice girls <br />and peter</p>

        </div>
      </div>
      <div className="images">
        <img alt="x" src={cupcake}></img>
        <img alt="x" src={flower1}></img>
        <img alt="x" src={cupcake3}></img>
        <img alt="x" src={flower2}></img>
        <img alt="x" src={cupcake2}></img>
        <img alt="x" src={flower3}></img>
        <img alt="x" src={cupcake4}></img>
        <img alt="x" src={flower4}></img>
      </div>

    </div>
  );
}

export default App;
